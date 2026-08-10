import StickerRepository from "../database/repositories/StickerRepository";
import TeamRepository from "../database/repositories/TeamRepository";
import SectionRepository from "../database/repositories/SectionRepository";
import AlbumRepository from "../database/repositories/AlbumRepository";

const StatisticsService = {
  calculateAlbum(stickers) {
    const total = stickers.length;

    const owned = stickers.filter((sticker) => sticker.owned).length;

    const duplicates = stickers.reduce(
      (sum, sticker) => sum + (sticker.duplicates || 0),
      0,
    );

    const missing = total - owned;

    const completion =
      total === 0 ? 0 : Number(((owned / total) * 100).toFixed(1));

    return {
      total,
      owned,
      missing,
      duplicates,
      completion,
    };
  },

  // calculateTeam(stickers) {

  //     const total = stickers.length;

  //     const owned = stickers.filter(
  //         sticker => sticker.owned
  //     ).length;

  //     return {
  //         total,
  //         owned,
  //         missing: total - owned,
  //         completion:
  //             total === 0
  //                 ? 0
  //                 : Number(((owned / total) * 100).toFixed(1)),
  //     };

  // },

  calculateSection(teams) {
    const total = teams.reduce((sum, team) => sum + team.total, 0);

    const owned = teams.reduce((sum, team) => sum + team.owned, 0);

    return {
      total,
      owned,
      missing: total - owned,
      completion: total === 0 ? 0 : Number(((owned / total) * 100).toFixed(1)),
    };
  },

  calculateProgressStats(total, owned, duplicates = 0) {
    const missing = total - owned;

    return {
      total,
      owned,
      missing,
      duplicates,
      completion: this.calculateProgress(total, owned),
    };
  },

  calculateTeam(stickers) {
    const total = stickers.length;

    const owned = stickers.filter((s) => s.owned).length;

    return this.calculateProgressStats(total, owned);
  },

  calculateProgress(total, owned) {
    if (total === 0) {
      return 0;
    }

    return Number(((owned / total) * 100).toFixed(1));
  },

  getCompletionColor(percent, colors) {
    if (percent >= 100) return colors.progressComplete;

    if (percent >= 75) return colors.progressGood;

    if (percent >= 50) return colors.progressHigh;

    if (percent >= 25) return colors.progressMedium;

    return colors.progressLow;
  },

  getGeneralStatistics() {
    return {
      version: "1.0.0",
      databaseVersion: 1,
      sections: SectionRepository.findAll().length,
      teams: TeamRepository.findAll().length,
      stickers: StickerRepository.count(),
      ...this.calculateAlbum(StickerRepository.findAll()),
    };
  },

  // 1. sortare
  sortByCompletion(items, descending = true) {
    return [...items].sort((a, b) =>
      descending ? b.completion - a.completion : a.completion - b.completion,
    );
  },

  // ⭐️ Rankings
  // 2. Top Teams
  getTopTeams(teamProgress, limit = 10) {
    return this.sortByCompletion(teamProgress).slice(0, limit);
  },

  // 3. Bottom Teams
  getBottomTeams(teamProgress, limit = 10) {
    return this.sortByCompletion(teamProgress, false).slice(0, limit);
  },

  // 4. Top Sections
  getTopSections(sectionProgress, limit = 10) {
    return this.sortByCompletion(sectionProgress).slice(0, limit);
  },

  // ⭐️ Charts

  // 5. Bottom Sections
  getBottomSections(sectionProgress, limit = 10) {
    return this.sortByCompletion(sectionProgress, false).slice(0, limit);
  },

  // 6. Teams with most duplicates
  getMostDuplicates(stickers, limit = 10) {
    const map = {};

    stickers.forEach((sticker) => {
      if (!map[sticker.team]) {
        map[sticker.team] = {
          team: sticker.team,
          duplicates: 0,
        };
      }

      map[sticker.team].duplicates += sticker.duplicates || 0;
    });

    return Object.values(map)
      .sort((a, b) => b.duplicates - a.duplicates)
      .slice(0, limit);
  },

  // 7. Teams with most missing stickers
  getMostMissing(teamProgress, limit = 10) {
    return [...teamProgress]
      .sort((a, b) => b.missing - a.missing)
      .slice(0, limit);
  },

  // 8. Album summary pentru grafice
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

  // 9. Bar Chart data
  buildBarChartData(items, colors) {
    return items.map((item) => ({
      value: item.completion,
      label: item.team?.name ?? item.section?.name ?? item.name,
      frontColor: this.getCompletionColor(item.completion, colors),
    }));
  },

  //   StatisticsService
  // │
  // ├── Album
  // │   ├── calculateAlbum()
  // │   ├── calculateTeam()
  // │   ├── calculateSection()
  // │   └── calculateProgress()
  // │
  // ├── Rankings
  // │   ├── getTopTeams()
  getTopTeamsOld(teamProgress, limit = 10) {
    return [...teamProgress]
      .sort((a, b) => b.completion - a.completion)
      .slice(0, limit);
  },
  // │   ├── getBottomTeams()
  getBottomTeams(teamProgress, limit = 10) {
    return [...teamProgress]
      .sort((a, b) => a.completion - b.completion)
      .slice(0, limit);
  },
  // │   └── getTopSections()
  getTopSections(sectionProgress) {
    return [...sectionProgress].sort((a, b) => b.completion - a.completion);
  },
  // │
  // ├── Charts
  // │   ├── getAlbumChartData()
  getAlbumChartData(stickers) {
    const stats = this.calculateAlbum(stickers);

    return [
      {
        label: "Owned",
        value: stats.owned,
        color: "success",
      },
      {
        label: "Missing",
        value: stats.missing,
        color: "danger",
      },
    ];
  },
  // │   ├── getCompletionDistribution()
  getCompletionDistributionOld(teamProgress) {
    return {
      completed: teamProgress.filter((t) => t.completion === 100).length,

      almost: teamProgress.filter(
        (t) => t.completion >= 75 && t.completion < 100,
      ).length,

      half: teamProgress.filter((t) => t.completion >= 50 && t.completion < 75)
        .length,

      started: teamProgress.filter((t) => t.completion > 0 && t.completion < 50)
        .length,

      empty: teamProgress.filter((t) => t.completion === 0).length,
    };
  },
  // │   └── getDuplicateStatistics()
  getDuplicateStatistics(stickers) {
    const duplicateStickers = stickers.filter((s) => s.duplicates > 0);

    return {
      stickers: duplicateStickers.length,

      duplicates: duplicateStickers.reduce((sum, s) => sum + s.duplicates, 0),

      maxDuplicates:
        duplicateStickers.length === 0
          ? 0
          : Math.max(...duplicateStickers.map((s) => s.duplicates)),
    };
  },
  // │
  // ├── Health
  // │   ├── getCollectionHealth()
  getCollectionHealth(stickers) {
    const stats = this.calculateAlbum(stickers);

    return {
      completion: stats.completion,

      duplicateRatio:
        stats.owned === 0
          ? 0
          : Number((stats.duplicates / stats.owned).toFixed(2)),

      missingRatio:
        stats.total === 0
          ? 0
          : Number((stats.missing / stats.total).toFixed(2)),
    };
  },
  // │   └── getMissingStatistics()
  getMissingStatistics(stickers) {
    const missing = stickers.filter((s) => !s.owned);

    return {
      count: missing.length,

      percentage: this.calculateProgress(
        stickers.length,
        stickers.length - missing.length,
      ),
    };
  },
  // │
  // ├── UI
  // │   └── getCompletionColor()
  // │
  // └── Settings
  //     └── getGeneralStatistics()

  getCompletionByTeam(stickers) {
    const map = new Map();

    stickers.forEach((sticker) => {
      if (!map.has(sticker.team_id)) {
        map.set(sticker.team_id, {
          id: sticker.team_id,
          name: sticker.team,
          total: 0,
          owned: 0,
        });
      }

      const team = map.get(sticker.team_id);

      team.total++;

      if (sticker.owned) team.owned++;
    });

    return [...map.values()]
      .map((team) => ({
        ...team,
        completion: this.calculateProgress(team.total, team.owned),
      }))
      .sort((a, b) => b.completion - a.completion);
  },

  getCompletionBySection(stickers) {
    const map = new Map();

    stickers.forEach((sticker) => {
      if (!map.has(sticker.section_id)) {
        map.set(sticker.section_id, {
          id: sticker.section_id,
          name: sticker.section,
          total: 0,
          owned: 0,
        });
      }

      const section = map.get(sticker.section_id);

      section.total++;

      if (sticker.owned) section.owned++;
    });

    return [...map.values()]
      .map((section) => ({
        ...section,
        completion: this.calculateProgress(section.total, section.owned),
      }))
      .sort((a, b) => b.completion - a.completion);
  },

  getAchievements(stickers) {
    const album = this.calculateAlbum(stickers);

    const teams = this.getCompletionByTeam(stickers);

    const sections = this.getCompletionBySection(stickers);

    return [
      {
        id: "album25",
        title: "Album 25%",
        unlocked: album.completion >= 25,
      },

      {
        id: "album50",
        title: "Album 50%",
        unlocked: album.completion >= 50,
      },

      {
        id: "album75",
        title: "Album 75%",
        unlocked: album.completion >= 75,
      },

      {
        id: "album100",
        title: "Album Complete",
        unlocked: album.completion >= 100,
      },

      {
        id: "firstTeam",
        title: "First Completed Team",
        unlocked: teams.some((team) => team.completion === 100),
      },

      {
        id: "firstSection",
        title: "First Completed Section",
        unlocked: sections.some((section) => section.completion === 100),
      },
    ];
  },

  // TEST
  getCompletionDistribution(stickers) {
    const owned = stickers.filter((s) => s.owned).length;
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
    const none = stickers.filter((s) => s.duplicates === 0).length;

    const one = stickers.filter((s) => s.duplicates === 1).length;

    const multiple = stickers.filter((s) => s.duplicates > 1).length;

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

  getSectionChart(sectionProgress) {
    return sectionProgress.map((section) => ({
      label: section.name,
      value: section.completion,
    }));
  },
  // TEST
};

export default StatisticsService;

// // replace
// Number(((owned / total) * 100).toFixed(1))
// // with
// completion: MathUtils.percentage(owned, total)
