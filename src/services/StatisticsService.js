import StickerRepository from "../database/repositories/StickerRepository";
import TeamRepository from "../database/repositories/TeamRepository";
import SectionRepository from "../database/repositories/SectionRepository";
import AlbumRepository from "../database/repositories/AlbumRepository";


const StatisticsService = {

    calculateAlbum(stickers) {

        const total = stickers.length;

        const owned = stickers.filter(
            sticker => sticker.owned
        ).length;

        const duplicates = stickers.reduce(
            (sum, sticker) => sum + (sticker.duplicates || 0),
            0
        );

        const missing = total - owned;

        const completion = total === 0
            ? 0
            : Number(((owned / total) * 100).toFixed(1));

        return {
            total,
            owned,
            missing,
            duplicates,
            completion,
        };

    },

    calculateTeam(stickers) {

        const total = stickers.length;

        const owned = stickers.filter(
            sticker => sticker.owned
        ).length;

        return {
            total,
            owned,
            missing: total - owned,
            completion:
                total === 0
                    ? 0
                    : Number(((owned / total) * 100).toFixed(1)),
        };

    },

    calculateSection(teams) {

        const total = teams.reduce(
            (sum, team) => sum + team.total,
            0
        );

        const owned = teams.reduce(
            (sum, team) => sum + team.owned,
            0
        );

        return {
            total,
            owned,
            missing: total - owned,
            completion:
                total === 0
                    ? 0
                    : Number(((owned / total) * 100).toFixed(1)),
        };

    },

    calculateProgress(total, owned) {

        if (total === 0) {
            return 0;
        }

        return Number(
            ((owned / total) * 100).toFixed(1)
        );

    },

    getCompletionColor(percent) {

        if (percent === 100) {
            return "#16A34A";
        }

        if (percent >= 75) {
            return "#22C55E";
        }

        if (percent >= 50) {
            return "#EAB308";
        }

        if (percent >= 25) {
            return "#F97316";
        }

        return "#EF4444";

    },

    getGeneralStatistics() {
    
        return {
            version: "1.0.0",
            databaseVersion: 1,
            sections: SectionRepository.findAll().length,
            teams: TeamRepository.findAll().length,
            stickers: StickerRepository.count(),
            ...this.calculateAlbum(
                StickerRepository.findAll()
            ),
        };
    
    },
  
};

export default StatisticsService;

// // replace
// Number(((owned / total) * 100).toFixed(1))
// // with
// completion: MathUtils.percentage(owned, total)