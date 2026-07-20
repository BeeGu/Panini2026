import * as Clipboard from "expo-clipboard";
import { Share } from "react-native";

const TradeExportService = {

    buildText(stickers) {

        const duplicates = stickers.filter(
            s => s.duplicates > 0
        );

        const missing = stickers.filter(
            s => !s.owned
        );

        let text = "🏆 Panini World Cup 2026\n\n";

        text += "🎁 DUPLICATES\n\n";

        duplicates.forEach(sticker => {

            text += `${sticker.team} - #${sticker.number} ${sticker.name} x${sticker.duplicates}\n`;

        });

        text += "\n";

        text += "❗ MISSING\n\n";

        missing.forEach(sticker => {

            text += `${sticker.team} - #${sticker.number} ${sticker.name}\n`;

        });

        return text;

    },

    async copy(stickers) {

        const text = this.buildText(stickers);

        await Clipboard.setStringAsync(text);

    },

    async share(stickers) {

        const text = this.buildText(stickers);

        await Share.share({

            message: text,

        });

    },

};

export default TradeExportService;