import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAlbum from "../hooks/useAlbum";
import useTheme from "../hooks/useTheme";

import Spacing from "../theme/spacing";

import ScreenHeader from "../components/common/ScreenHeader";
import ExpandableCard from "../components/common/ExpandableCard";
import Badge from "../components/common/Badge";

import AlbumPieChart from "../components/statistics/charts/AlbumPieChart";
import TeamBarChart from "../components/statistics/charts/TeamBarChart";
import SectionChart from "../components/statistics/charts/SectionChart";
import StatGrid from "../components/statistics/StatGrid";
import ProgressItem from "../components/statistics/ProgressItem";
import AchievementList from "../components/statistics/AchievementList";
import DuplicatesBarChart from "../components/statistics/charts/DuplicatesBarChart";
import StatisticsTeamRanking from "../components/statistics/StatisticsTeamRanking";
import StatisticsRecentActivity from "../components/statistics/StatisticsRecentActivity";
import TeamRanking from "../components/statistics/TeamRanking";
import SectionRanking from "../components/statistics/SectionRanking";

export default function StatisticsScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const {
    stats,
    recentActivity,
    teamProgress,
    sectionProgress,
    achievements,
    chartData,
  } = useAlbum();

  const completedAchievements = achievements.filter(
    (achievement) => achievement.completed,
  ).length;

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <ScreenHeader
        title={t("statistics.title")}
        subtitle={t("statistics.collectionOverview")}
        icon="stats-chart-outline"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AlbumPieChart />

        {/*
        <TeamBarChart data={chartData.topTeams} />

        <SectionChart data={chartData.sections} />

        <TeamRanking
          // data={chartData.worstTeams}
          teams={chartData.topTeams}
          limit={10}
        />

        <SectionRanking
          // sections={chartData.sections}
          sections={sectionProgress}
          limit={10}
        />
         */}

        <StatGrid stats={stats} />

        <ExpandableCard
          title={t("statistics.teams")}
          subtitle={t("statistics.nationalTeams", {
            count: teamProgress.length,
          })}
          icon="flag-outline"
          rightContent={
            <Badge text={teamProgress.length} color={colors.primary} />
          }
          scrollable
          maxHeight={350}
        >
          {teamProgress.map((team) => (
            <ProgressItem
              key={team.id}
              title={team.name}
              owned={team.owned}
              total={team.total}
            />
          ))}
        </ExpandableCard>

        <ExpandableCard
          title={t("statistics.sections")}
          subtitle={t("statistics.sectionsCount", {
            count: sectionProgress.length,
          })}
          icon="albums-outline"
          scrollable
          maxHeight={300}
        >
          {sectionProgress.map((section) => (
            <ProgressItem
              key={section.id}
              title={section.name}
              owned={section.owned}
              total={section.total}
            />
          ))}
        </ExpandableCard>

        <ExpandableCard
          title={t("statistics.achievements")}
          subtitle={t("statistics.completed", {
            count: completedAchievements,
          })}
          icon="trophy-outline"
          scrollable
        >
          <AchievementList achievements={achievements} />
        </ExpandableCard>

        <DuplicatesBarChart data={chartData.duplicates} />

        <ExpandableCard
          title={t("statistics.topTeams")}
          subtitle={t("statistics.visualStatistics")}
          icon="podium-outline"
          scrollable
        >
          <StatisticsTeamRanking teams={teamProgress} />
        </ExpandableCard>

        <ExpandableCard
          title={t("statistics.recentActivity")}
          subtitle={t("statistics.visualActivity")}
          icon="time-outline"
          scrollable
        >
          <StatisticsRecentActivity activity={recentActivity} />
        </ExpandableCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: Spacing.lg,
    gap: Spacing.lg,
    paddingBottom: 40,
  },
});
