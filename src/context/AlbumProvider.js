// src/context/AlbumProvider.js
import { useEffect, useMemo, useState } from "react";
import AlbumContext from "./AlbumContext";
import AlbumService from "../services/AlbumService";
import StatisticsService from "../services/StatisticsService";
import { FILTERS } from "../constants/filters";
import filterStickers from "../utils/filterStickers";
import groupAlbum from "../utils/groupAlbum";
import groupBySectionAndTeam from "../utils/groupBySectionAndTeam";
import AchievementService from "../services/AchievementService";

export default function AlbumProvider({ children }) {
  const [stickers, setStickers] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [teamProgress, setTeamProgress] = useState([]);
  const [sectionProgress, setSectionProgress] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    reload();
  }, []);

  function reload() {
    const stickers = AlbumService.load();

    setStickers(stickers);

    setRecentActivity(AlbumService.getRecentActivity());

    setTeamProgress(AlbumService.getTeamProgress());

    setSectionProgress(AlbumService.getSectionProgress());
  }

  function toggleSticker(id) {
    AlbumService.toggleSticker(id);
    reload();
  }

  // ⚠️ toggleSticker <=> updateSticker
  function updateSticker(data) {
    AlbumService.updateSticker(data);
    reload();
  }

  function updateDuplicates(id, duplicates) {
    AlbumService.updateDuplicates(id, duplicates);
    reload();
  }

  function addDuplicate(id) {
    AlbumService.addDuplicate(id);
    reload();
  }

  function removeDuplicate(id) {
    AlbumService.removeDuplicate(id);
    reload();
  }

  function updateNotes(id, notes) {
    AlbumService.updateNotes(id, notes);
    reload();
  }

  const stats = useMemo(() => {
    return StatisticsService.calculateAlbum(stickers);
  }, [stickers]);

  const filteredStickers = useMemo(() => {
    return filterStickers(stickers, search, filter);
  }, [stickers, search, filter]);

  // function getSticker(id) {
  //   return stickers.find(
  //       sticker => sticker.id === id
  //   );
  // }

  const stickerMap = useMemo(() => {
    return new Map(stickers.map((s) => [s.id, s]));
  }, [stickers]);

  function getSticker(id) {
    return stickerMap.get(id);
  }

  function getTeam(id) {
    return AlbumService.getTeams().find((team) => team.id === id);
  }

  function getSection(id) {
    return AlbumService.getSections().find((section) => section.id === id);
  }

  const groupedTeams = useMemo(() => {
    const teams = AlbumService.getTeams();

    return teams.map((team) => {
      const teamStickers = filteredStickers.filter(
        (s) => s.team_id === team.id,
      );

      return {
        team,
        stickers: teamStickers,
        owned: teamStickers.filter((s) => s.owned).length,
        total: teamStickers.length,
      };
    });
  }, [filteredStickers]);

  // trade
  const duplicateStickers = useMemo(() => {
    return stickers
      .filter((s) => s.duplicates > 0)
      .sort((a, b) => {
        if (b.duplicates !== a.duplicates) return b.duplicates - a.duplicates;

        return a.number - b.number;
      });
  }, [stickers]);

  const missingStickers = useMemo(() => {
    return stickers.filter((s) => !s.owned).sort((a, b) => a.number - b.number);
  }, [stickers]);

  const tradeSummary = useMemo(() => {
    return {
      duplicateStickers: duplicateStickers.length,
      duplicates: duplicateStickers.reduce(
        (sum, sticker) => sum + sticker.duplicates,
        0,
      ),
      missing: missingStickers.length,
    };
  }, [duplicateStickers, missingStickers]);

  const groupedAlbum = useMemo(() => {
    return groupBySectionAndTeam(filteredStickers);
  }, [filteredStickers]);

  const groupedDuplicates = useMemo(() => {
    return groupBySectionAndTeam(stickers.filter((s) => s.duplicates > 0));
  }, [stickers]);

  const groupedMissing = useMemo(() => {
    return groupBySectionAndTeam(stickers.filter((s) => !s.owned));
  }, [stickers]);

  // settings
  const generalStats = useMemo(() => {
    return StatisticsService.getGeneralStatistics();
  }, [stickers]);

  // achievements
  const achievements = useMemo(() => {
    return AchievementService.getAchievements({
      stats,
      teams: teamProgress,
      sections: sectionProgress,
    });
  }, [stats, teamProgress, sectionProgress]);

  // const teamCompletion = useMemo(() => {
  //   return StatisticsService.getCompletionByTeam(stickers);
  // }, [stickers]);

  // const sectionCompletion = useMemo(() => {
  //   return StatisticsService.getCompletionBySection(stickers);
  // }, [stickers]);

  // const chartData = useMemo(
  //   () => ({
  //     completion: StatisticsService.getCompletionDistribution(stickers),
  //     duplicates: StatisticsService.getDuplicateDistribution(stickers),
  //     topTeams: StatisticsService.getTopTeams(teamProgress),
  //     worstTeams: StatisticsService.getWorstTeams(teamProgress),
  //     sections: StatisticsService.getSectionChart(sectionProgress),
  //   }),
  //   [stickers, teamProgress, sectionProgress],
  // );

  // const chartData = useMemo(() => {
  //   const teams = StatisticsService.getCompletionByTeam(stickers);
  //   const sections = StatisticsService.getCompletionBySection(stickers);

  //   return {
  //     completion: StatisticsService.getCompletionDistribution(stickers),

  //     duplicates: StatisticsService.getDuplicateDistribution(stickers),

  //     topTeams: StatisticsService.getTopTeams(teams),

  //     worstTeams: StatisticsService.getWorstTeams(teams),

  //     sections: StatisticsService.getSectionChart(sections),
  //   };
  // }, [stickers]);

  const chartData = useMemo(() => {
    const topTeams = StatisticsService.getTopTeams(teamProgress);

    return {
      completion: StatisticsService.getCompletionDistribution(stickers),
      duplicates: StatisticsService.getDuplicateDistribution(stickers),
      topTeams,
      worstTeams: StatisticsService.getWorstTeams(teamProgress),
      sections: StatisticsService.getSectionChart(sectionProgress),
    };
  }, [stickers, teamProgress, sectionProgress]);

  return (
    <AlbumContext.Provider
      value={{
        // -----------------------------
        // State
        // -----------------------------
        stickers,
        filteredStickers,
        stats,
        recentActivity,
        teamProgress,
        sectionProgress,

        // -----------------------------
        // Queries
        // -----------------------------
        getSticker,
        getTeam,
        getSection,

        // -----------------------------
        // Trade
        // -----------------------------
        duplicateStickers,
        missingStickers,
        tradeSummary,

        // -----------------------------
        // Commands
        // -----------------------------
        toggleSticker,
        updateSticker,
        updateDuplicates,
        addDuplicate,
        removeDuplicate,
        updateNotes,
        reload,

        // -----------------------------
        // UI State
        // -----------------------------
        search,
        setSearch,
        filter,
        setFilter,

        groupedTeams,
        groupedAlbum,

        groupedDuplicates,
        groupedMissing,

        // settings
        generalStats,

        // statistics
        // teamCompletion,
        // sectionCompletion,
        achievements,
        chartData,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}
