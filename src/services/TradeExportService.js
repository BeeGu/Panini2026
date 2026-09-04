import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";
import { File, Paths } from "expo-file-system";

import groupTrade from "../utils/groupTrade";
import getFlagEmoji from "../utils/getFlagEmoji";
import TradeService from "./TradeService";

const TradeExportService = {
  buildSectionText(section, type) {
    let text = "";

    text += `📖 ${section.code ?? section.name}\n`;
    text += `${"-".repeat(40)}\n\n`;

    section.teams.forEach((team) => {
      text += `${getFlagEmoji(team.iso2)} ${team.name}\n`;

      team.stickers.forEach((sticker) => {
        if (type === "duplicates") {
          text += `   #${sticker.number} ${sticker.name}  x${sticker.duplicates}\n`;
        } else {
          text += `   #${sticker.number} ${sticker.name}\n`;
        }
      });

      text += "\n";
    });

    return text;
  },

  buildText(stickers, mode = "both") {
    let text = "";

    text += "🏆 PANINI WORLD CUP 2026\n";
    text += "========================\n\n";

    /*
     * DUPLICATES
     */
    if (mode === "duplicates" || mode === "both") {
      const duplicates = stickers.filter((sticker) => sticker.duplicates > 0);

      const sections = groupTrade(duplicates);

      text += "🎁 DUPLICATES\n";
      text += "=============\n\n";

      if (sections.length === 0) {
        text += "No duplicates.\n\n";
      } else {
        sections.forEach((section) => {
          text += this.buildSectionText(section, "duplicates");
        });
      }
    }

    /*
     * MISSING
     */
    if (mode === "missing" || mode === "both") {
      const missing = stickers.filter((sticker) => !sticker.owned);

      const sections = groupTrade(missing);

      text += "❗ MISSING\n";
      text += "==========\n\n";

      if (sections.length === 0) {
        text += "No missing stickers.\n\n";
      } else {
        sections.forEach((section) => {
          text += this.buildSectionText(section, "missing");
        });
      }
    }

    return text.trim();
  },

  async copy(stickers, mode = "both") {
    const text = this.buildText(stickers, mode);

    await Clipboard.setStringAsync(text);
  },

  async share(stickers, mode = "both") {
    const text = this.buildText(stickers, mode);

    const available = await Sharing.isAvailableAsync();

    if (!available) {
      throw new Error("File sharing is not available on this device.");
    }

    const file = new File(Paths.cache, `panini-trade-${mode}.txt`);

    // Make sure the file is created/overwritten.
    file.create({
      overwrite: true,
    });

    file.write(text);

    await Sharing.shareAsync(file.uri, {
      mimeType: "text/plain",
      dialogTitle: "Share Panini trade list",
    });
  },

  async exportJson(stickers, userName) {
    const trade = TradeService.buildTrade(stickers, userName);

    const available = await Sharing.isAvailableAsync();

    if (!available) {
      throw new Error("File sharing is not available on this device.");
    }

    const file = new File(Paths.cache, `panini-trade-${Date.now()}.json`);

    file.create({
      overwrite: true,
    });

    file.write(JSON.stringify(trade, null, 2));

    await Sharing.shareAsync(file.uri, {
      mimeType: "application/json",
      dialogTitle: "Share Panini trade",
    });
  },
};

export default TradeExportService;
