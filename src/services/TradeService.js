import StickerRepository from "../database/repositories/StickerRepository";

const TradeService = {

    getDuplicates() {

        return StickerRepository.findDuplicates();

    },

    getMissing() {

        return StickerRepository.findMissing();

    },

    getSummary() {

        const duplicates =
            StickerRepository.findDuplicates();

        const missing =
            StickerRepository.findMissing();

        return {

            duplicates: duplicates.reduce(
                (sum, s) => sum + s.duplicates,
                0
            ),

            duplicateStickers: duplicates.length,

            missing: missing.length,

        };

    },

};

export default TradeService;