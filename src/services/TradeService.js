import * as DocumentPicker from "expo-document-picker";

import StickerRepository from "../database/repositories/StickerRepository";

const TradeService = {
  getDuplicates() {
    return StickerRepository.findDuplicates();
  },

  getMissing() {
    return StickerRepository.findMissing();
  },

  getSummary() {
    const duplicates = StickerRepository.findDuplicates();
    const missing = StickerRepository.findMissing();

    return {
      duplicates: duplicates.reduce((sum, s) => sum + s.duplicates, 0),
      duplicateStickers: duplicates.length,
      missing: missing.length,
    };
  },

  buildTrade(stickers, userName) {
    return {
      app: "Panini Tracker 2026",
      album: "FIFA World Cup 2026",
      type: "trade",
      version: 1,
      createdAt: new Date().toISOString(),

      user: {
        name: userName?.trim() || "Unknown user",
      },

      duplicates: stickers
        .filter((sticker) => sticker.duplicates > 0)
        .map((sticker) => ({
          code: sticker.code,
          number: sticker.number,
          name: sticker.name,
          type: sticker.type,
          quantity: sticker.duplicates,
        })),

      missing: stickers
        .filter((sticker) => !sticker.owned)
        .map((sticker) => ({
          code: sticker.code,
          number: sticker.number,
          name: sticker.name,
          type: sticker.type,
        })),
    };
  },

  async importTrade() {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/json",
      copyToCacheDirectory: true,
    });

    if (result.canceled) {
      return null;
    }

    const file = result.assets[0];

    const response = await fetch(file.uri);
    const text = await response.text();

    const trade = JSON.parse(text);

    this.validateTrade(trade);

    return trade;
  },

  validateTrade(trade) {
    if (!trade || typeof trade !== "object") {
      throw new Error("Invalid trade file.");
    }

    if (trade.app !== "Panini Tracker 2026") {
      throw new Error("This file is not a Panini Tracker trade file.");
    }

    if (trade.album !== "FIFA World Cup 2026") {
      throw new Error("This trade file belongs to another album.");
    }

    if (trade.type !== "trade") {
      throw new Error("Invalid trade file type.");
    }

    if (trade.version !== 1) {
      throw new Error("Unsupported trade file version.");
    }

    if (!trade.user || typeof trade.user.name !== "string") {
      throw new Error("Trade user information is missing.");
    }

    if (!Array.isArray(trade.duplicates)) {
      throw new Error("Invalid duplicates data.");
    }

    if (!Array.isArray(trade.missing)) {
      throw new Error("Invalid missing data.");
    }

    for (const sticker of trade.duplicates) {
      if (
        typeof sticker.code !== "string" ||
        typeof sticker.number !== "number" ||
        typeof sticker.quantity !== "number"
      ) {
        throw new Error("Invalid duplicate sticker data.");
      }
    }

    for (const sticker of trade.missing) {
      if (
        typeof sticker.code !== "string" ||
        typeof sticker.number !== "number"
      ) {
        throw new Error("Invalid missing sticker data.");
      }
    }

    return true;
  },

  matchTrade(trade, stickers) {
    const myStickers = new Map(
      stickers.map((sticker) => [sticker.code, sticker]),
    );

    const canReceive = trade.duplicates
      .filter((sticker) => {
        const mine = myStickers.get(sticker.code);

        return mine && !mine.owned;
      })
      .map((sticker) => ({
        ...sticker,
        mySticker: myStickers.get(sticker.code),
      }));

    const canGive = trade.missing
      .filter((sticker) => {
        const mine = myStickers.get(sticker.code);

        return mine && mine.duplicates > 0;
      })
      .map((sticker) => ({
        ...sticker,
        mySticker: myStickers.get(sticker.code),
      }));

    return {
      user: trade.user,
      createdAt: trade.createdAt,
      canReceive,
      canGive,
    };
  },
};

export default TradeService;
