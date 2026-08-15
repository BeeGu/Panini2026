import StickerRepository from "../database/repositories/StickerRepository";
import TeamRepository from "../database/repositories/TeamRepository";
import SectionRepository from "../database/repositories/SectionRepository";

const StatisticsService = {
  // =========================================================
  // Album
  // =========================================================

  calculateAlbum(stickers) {
    const total = stickers.length;
    const owned = stickers.filter((sticker) => sticker.owned).length;

    const duplicates = stickers.reduce(
      (sum, sticker) => sum + (sticker.duplicates || 0),
      0,
    );

    const missing = total - owned;

    return {
      total,
      owned,
      missing,
      duplicates,
      completion: this.calculateProgress(total, owned),
    };
  },

  calculateProgress(total, owned) {
    if (total === 0) {
      return 0;
    }

    return Number(((owned / total) * 100).toFixed(1));
  },

  calculateProgressStats(total, owned, duplicates = 0) {
    return {
      total,
      owned,
      missing: total - owned,
      duplicates,
      completion: this.calculateProgress(total, owned),
    };
  },

  calculateTeam(stickers) {
    const total = stickers.length;
    const owned = stickers.filter((sticker) => sticker.owned).length;

    return this.calculateProgressStats(total, owned);
  },

  calculateSection(teams) {
    const total = teams.reduce((sum, team) => sum + team.total, 0);
    const owned = teams.reduce((sum, team) => sum + team.owned, 0);

    return this.calculateProgressStats(total, owned);
  },

  // =========================================================
  // General statistics
  // =========================================================

  getGeneralStatistics() {
    const stickers = StickerRepository.findAll();

    return {
      version: "1.0.0",
      databaseVersion: 1,
      sections: SectionRepository.findAll().length,
      teams: TeamRepository.findAll().length,
      stickers: StickerRepository.count(),
      ...this.calculateAlbum(stickers),
    };
  },

  // =========================================================
  // Progress
  // =========================================================

  getCompletionColor(percent, colors) {
    if (percent >= 100) return colors.progressComplete;
    if (percent >= 75) return colors.progressGood;
    if (percent >= 50) return colors.progressHigh;
    if (percent >= 25) return colors.progressMedium;

    return colors.progressLow;
  },

  getCompletionByTeam(stickers) {
    const teams = new Map();

    stickers.forEach((sticker) => {
      if (!teams.has(sticker.team_id)) {
        teams.set(sticker.team_id, {
          id: sticker.team_id,
          name: sticker.team,
          total: 0,
          owned: 0,
        });
      }

      const team = teams.get(sticker.team_id);

      team.total += 1;

      if (sticker.owned) {
        team.owned += 1;
      }
    });

    return [...teams.values()]
      .map((team) => ({
        ...team,
        missing: team.total - team.owned,
        completion: this.calculateProgress(team.total, team.owned),
      }))
      .sort((a, b) => b.completion - a.completion);
  },

  getCompletionBySection(stickers) {
    const sections = new Map();

    stickers.forEach((sticker) => {
      if (!sections.has(sticker.section_id)) {
        sections.set(sticker.section_id, {
          id: sticker.section_id,
          name: sticker.section,
          total: 0,
          owned: 0,
        });
      }

      const section = sections.get(sticker.section_id);

      section.total += 1;

      if (sticker.owned) {
        section.owned += 1;
      }
    });

    return [...sections.values()]
      .map((section) => ({
        ...section,
        missing: section.total - section.owned,
        completion: this.calculateProgress(section.total, section.owned),
      }))
      .sort((a, b) => b.completion - a.completion);
  },

  // =========================================================
  // Rankings
  // =========================================================

  getTopTeams(teamProgress, limit = 10) {
    return [...teamProgress]
      .sort((a, b) => b.completion - a.completion)
      .slice(0, limit);
  },

  getWorstTeams(teamProgress, limit = 10) {
    return [...teamProgress]
      .sort((a, b) => a.completion - b.completion)
      .slice(0, limit);
  },

  // =========================================================
  // Chart data
  // =========================================================

  getAlbumChart(stats, colors) {
    return [
      {
        label: "Owned",
        value: stats.owned,
        color: colors.success,
      },
      {
        label: "Missing",
        value: stats.missing,
        color: colors.warning,
      },
    ];
  },

  buildBarChartData(items, colors) {
    return items.map((item) => ({
      value: item.completion,
      label: item.name,
      frontColor: this.getCompletionColor(item.completion, colors),
    }));
  },

  getSectionChart(sectionProgress) {
    return sectionProgress.map((section) => ({
      label: section.name,
      value: section.completion,
    }));
  },

  getCompletionDistribution(stickers) {
    const owned = stickers.filter((sticker) => sticker.owned).length;
    const missing = stickers.length - owned;

    return [
      {
        label: "Collected",
        value: owned,
      },
      {
        label: "Missing",
        value: missing,
      },
    ];
  },

  getDuplicateDistribution(stickers) {
    const none = stickers.filter((sticker) => sticker.duplicates === 0).length;

    const one = stickers.filter((sticker) => sticker.duplicates === 1).length;

    const multiple = stickers.filter(
      (sticker) => sticker.duplicates > 1,
    ).length;

    return [
      {
        label: "None",
        value: none,
      },
      {
        label: "1",
        value: one,
      },
      {
        label: "2+",
        value: multiple,
      },
    ];
  },
};

export default StatisticsService;
