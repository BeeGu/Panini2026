import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAlbum from "../hooks/useAlbum";
import useTheme from "../hooks/useTheme";
import Typography from "../theme/typography";
import Spacing from "../theme/spacing";

import StatisticsService from "../services/StatisticsService";

import ScreenHeader from "../components/common/ScreenHeader";
import ExpandableCard from "../components/common/ExpandableCard";
import Badge from "../components/common/Badge";

import StatisticsHeader from "../components/statistics/StatisticsHeader";
import AlbumPieChart from "../components/statistics/charts/AlbumPieChart";
import StatGrid from "../components/statistics/StatGrid";
import ProgressItem from "../components/statistics/ProgressItem";
import AchievementList from "../components/statistics/AchievementList";
import StatisticsCharts from "../components/statistics/StatisticsCharts";
import DuplicatesBarChart from "../components/statistics/charts/DuplicatesBarChart";
import StatisticsTeamRanking from "../components/statistics/StatisticsTeamRanking";
import StatisticsRecentActivity from "../components/statistics/StatisticsRecentActivity";


export default function StatisticsScreen() {

    const { colors } = useTheme();

    const {
        stats,
        recentActivity,
        teamProgress,
        sectionProgress,
        achievements,
        chartData,
    } = useAlbum();

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
                title="Statistics"
                icon="stats-chart-outline"
                subtitle="Collection overview"
            />

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >

                <AlbumPieChart />

                <StatGrid
                    stats={stats}
                />

                <ExpandableCard
                    // title={`Teams (${teamProgress.length})`}
                    title="Teams"
                    subtitle={`${teamProgress.length} national teams`}
                    icon="flag-outline"
                
                    rightContent={
                        <Badge
                            // icon 
                            text={teamProgress.length}
                            color={colors.primary}
                            // backgroundColor
                        />
                    }

                    initiallyExpanded={false}
                    scrollable
                    maxHeight={350}
                    // footer={...}
                    emptyText="No data"
                    showDivider
                >
                    {teamProgress.map(team => (
                        <ProgressItem
                            key={team.id}
                            title={team.name}
                            owned={team.owned}
                            total={team.total}
                        />
                    ))}
                </ExpandableCard>

                <ExpandableCard
                    // title={`Sections (${sectionProgress.length})`}
                    title="Sections"
                    subtitle={`${sectionProgress.length} sections`}
                    scrollable
                    maxHeight={300}
                >
                    {sectionProgress.map(section => (
                        <ProgressItem
                            key={section.id}
                            title={section.name}
                            owned={section.owned}
                            total={section.total}
                        />
                    ))}
                </ExpandableCard>

                <ExpandableCard
                    title="Achievements"
                    subtitle={`${achievements.filter(a => a.completed).length} completed`}
                    icon="trophy-outline"
                    scrollable
                >
                    <AchievementList
                        achievements={achievements}
                    />
                </ExpandableCard>

                {/*<ExpandableCard
                    title="Charts"
                    subtitle="Visual statistics"
                    icon="pie-chart-outline"
                    scrollable
                >
                    <StatisticsCharts />
                </ExpandableCard >*/}

                <DuplicatesBarChart
                    data={chartData.duplicates}
                />

                <ExpandableCard
                    title="Top teams"
                    subtitle="Visual statistics"
                    icon="pie-chart-outline"
                    scrollable
                >
                    <StatisticsTeamRanking
                        teams={teamProgress}
                    />
                </ExpandableCard>

                <ExpandableCard
                    title="Recent activity"
                    subtitle="Visual activity"
                    icon="time-outline"
                    scrollable
                >
                    <StatisticsRecentActivity
                        activity={recentActivity}
                    />
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

    statsRow: {
        flexDirection: "row",
        gap: Spacing.md,
    },

});