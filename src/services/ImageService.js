import { Image } from "react-native";

const stickerImages = {
    // ARG1: require("../assets/stickers/ARG1.png"),
    // ARG2: require("../assets/stickers/ARG2.png"),
};

const teamImages = {
    // ARG: require("../assets/teams/ARG.png"),
    // BRA: require("../assets/teams/BRA.png"),
};

const ImageService = {

    preload() {

        const images = [
            ...Object.values(stickerImages),
            ...Object.values(teamImages),
        ];

        Image.prefetch?.(images);

    },

    getStickerImage(sticker) {

        if (!sticker) {
            return null;
        }

        return stickerImages[sticker.code] ?? null;

    },

    getTeamLogo(teamCode) {

        if (!teamCode) {
            return null;
        }

        return teamImages[teamCode] ?? null;

    },

    hasStickerImage(sticker) {

        return !!this.getStickerImage(sticker);

    },

    hasTeamLogo(teamCode) {

        return !!this.getTeamLogo(teamCode);

    },

};

export default ImageService;