// src/services/AlbumService.js
import StickerRepository from "../database/repositories/StickerRepository";
import TeamRepository from "../database/repositories/TeamRepository";
import SectionRepository from "../database/repositories/SectionRepository";
import AlbumRepository from "../database/repositories/AlbumRepository";

const AlbumService1 = {

    load() {
        return StickerRepository.findAll();
    },

    toggleSticker(id) {

        const sticker = StickerRepository.findById(id);

        StickerRepository.updateOwned(
            id,
            !sticker.owned
        );

    },

    getSticker(id) {
      return StickerRepository.findById(id);
    },

    getRecentActivity() {
        return AlbumRepository.findRecent();
    },

    getTeamProgress() {
        return AlbumRepository.getTeamProgress();
    },
/*
// ⚠️ folosim: src/utils/filterStickers.js
    filter(stickers, search, filter) {

        let result = [...stickers];

        switch (filter) {

            case "missing":
                result = result.filter(s => !s.owned);
                break;

            case "owned":
                result = result.filter(s => s.owned);
                break;

            case "duplicates":
                result = result.filter(s => s.duplicates > 0);
                break;

        }

        if (search.trim()) {

            if (/^\d+$/.test(search)) {

                result = result.filter(
                    s => s.number === Number(search)
                );

            } else {

                const term = search.toLowerCase();

                result = result.filter(s =>

                    s.name?.toLowerCase().includes(term)

                    ||

                    s.team?.toLowerCase().includes(term)

                );

            }

        }

        return result;

    },
*/

  getTeamProgress() {

        const teams = TeamRepository.findAll();

        return teams.map(team => {

            const stickers = StickerRepository.findByTeam(team.id);

            const total = stickers.length;
            const owned = stickers.filter(s => s.owned).length;

            return {
                id: team.id,
                name: team.name,
                code: team.code,
                total,
                owned,
                percent: total === 0
                    ? 0
                    : Math.round((owned / total) * 100),
            };

        });

    },
};

const AlbumService = {

    // Album
    load() {
        return StickerRepository.findAll();
    },

    getStatistics() {
        return AlbumRepository.getStatistics();
    },

    getRecentActivity() {
        // return AlbumRepository.getRecentActivity();
        return AlbumRepository.findRecent();
    },

  // ⚠️ todo
    // getTeamProgress() {
    //     return AlbumRepository.getTeamProgress();
    // },
  getTeamProgress() {
        const teams = TeamRepository.findAll();

        return teams.map(team => {
            const stickers = StickerRepository.findByTeam(team.id);
            const total = stickers.length;
            const owned = stickers.filter(s => s.owned).length;

            return {
                id: team.id,
                name: team.name,
                code: team.code,
                total,
                owned,
                percent: total === 0
                    ? 0
                    : Math.round((owned / total) * 100),
            };

        });

    },

    // Sticker
    updateSticker(data) {
        StickerRepository.update(data);
    },

    toggleSticker(id) {
        const sticker = StickerRepository.findById(id);

        StickerRepository.updateOwned(
            id,
            sticker.owned ? 0 : 1
        );

    },

    updateDuplicates(id, duplicates) {
        StickerRepository.setDuplicates(id, duplicates);
    },

    addDuplicate(id) {
        StickerRepository.incrementDuplicates(id);
    },

    removeDuplicate(id) {
        StickerRepository.decrementDuplicates(id);
    },
  
    updateNotes(id, notes) {
        StickerRepository.updateNotes(id, notes);
    },

    // Reset
    resetCollection() {
        StickerRepository.resetCollection();
    },

    // Teams
    getTeams() {
        return TeamRepository.findAll();
    },

    // Sections
    getSections() {
        return SectionRepository.findAll();
    }
};

export default AlbumService;
