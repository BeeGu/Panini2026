const AchievementService = {
  createAchievement(data) {
    const completion =
      data.target > 0 ? Math.min(100, (data.progress / data.target) * 100) : 0;

    return {
      ...data,
      completion: Number(completion.toFixed(1)),
      completed: completion >= 100,
    };
  },

  getAchievements({ stats, teams, sections }) {
    const completedTeams = teams.filter(
      (team) => team.total > 0 && team.owned >= team.total,
    ).length;

    const completedSections = sections.filter(
      (section) => section.total > 0 && section.owned >= section.total,
    ).length;

    return [
      this.createAchievement({
        id: "first",
        title: "First Sticker",
        description: "Collect your first sticker.",
        icon: "sparkles-outline",
        progress: stats.owned,
        target: 1,
      }),

      this.createAchievement({
        id: "collector10",
        title: "Collector I",
        description: "Collect 10 stickers.",
        icon: "star-outline",
        progress: stats.owned,
        target: 10,
      }),

      this.createAchievement({
        id: "collector25",
        title: "Collector II",
        description: "Collect 25 stickers.",
        icon: "star-half-outline",
        progress: stats.owned,
        target: 25,
      }),

      this.createAchievement({
        id: "collector50",
        title: "Collector III",
        description: "Collect 50 stickers.",
        icon: "trophy-outline",
        progress: stats.owned,
        target: 50,
      }),

      this.createAchievement({
        id: "half",
        title: "Half Album",
        description: "Reach 50% completion.",
        icon: "albums-outline",
        progress: stats.completion,
        target: 50,
      }),

      this.createAchievement({
        id: "collector75",
        title: "Almost There",
        description: "Reach 75% completion.",
        icon: "medal-outline",
        progress: stats.completion,
        target: 75,
      }),

      this.createAchievement({
        id: "collector100",
        title: "Album Master",
        description: "Complete the album.",
        icon: "ribbon-outline",
        progress: stats.completion,
        target: 100,
      }),

      this.createAchievement({
        id: "team",
        title: "Team Complete",
        description: "Complete one team.",
        icon: "flag-outline",
        progress: completedTeams,
        target: 1,
      }),

      this.createAchievement({
        id: "section",
        title: "Section Complete",
        description: "Complete one section.",
        icon: "layers-outline",
        progress: completedSections,
        target: 1,
      }),
    ];
  },
};

export default AchievementService;
