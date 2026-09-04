// src/services/AlbumService.js
import StickerRepository from "../database/repositories/StickerRepository";
import TeamRepository from "../database/repositories/TeamRepository";
import SectionRepository from "../database/repositories/SectionRepository";
import AlbumRepository from "../database/repositories/AlbumRepository";

const AlbumService = {
  // Album
  load() {
    return StickerRepository.findAll();
  },

  getStatistics() {
    return AlbumRepository.getStatistics();
  },

  getRecentActivity() {
    return AlbumRepository.findRecent();
  },

  getTeamProgress() {
    const teams = TeamRepository.findAll();

    return teams.map((team) => {
      const stickers = StickerRepository.findByTeam(team.id).filter(
        (sticker) => sticker.section_code !== "EXTRA",
      );

      const total = stickers.length;
      const owned = stickers.filter((s) => s.owned).length;

      const duplicates = stickers.reduce(
        (sum, sticker) => sum + sticker.duplicates,
        0,
      );

      return {
        id: team.id,
        name: team.name,
        code: team.code,
        iso2: team.iso2,

        total,
        owned,
        duplicates: duplicates,

        percent: total === 0 ? 0 : Math.round((owned / total) * 100),
      };
    });
  },

  getSectionProgress() {
    const sections = SectionRepository.findAll().filter(
      (section) => section.code !== "EXTRA",
    );

    return sections.map((section) => {
      const stickers = StickerRepository.findBySection(section.id);

      const total = stickers.length;

      const owned = stickers.filter((s) => s.owned).length;

      const duplicates = stickers.reduce((sum, s) => sum + s.duplicates, 0);

      return {
        id: section.id,
        code: section.code,
        name: section.name,

        owned,
        total,
        duplicates,

        missing: total - owned,

        percent: total === 0 ? 0 : Math.round((owned / total) * 100),
      };
    });
  },

  // Sticker
  updateSticker(data) {
    StickerRepository.update(data);
  },

  toggleSticker(id) {
    const sticker = StickerRepository.findById(id);

    StickerRepository.updateOwned(id, sticker.owned ? 0 : 1);
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
  },
};

export default AlbumService;
