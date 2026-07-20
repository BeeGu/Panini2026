import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAlbum from "../hooks/useAlbum";

import Colors from "../theme/colors";

import StatisticsSummaryCard from "../components/statistics/StatisticsSummaryCard";
import StatisticsQuickStats from "../components/statistics/StatisticsQuickStats";
import StatisticsGroupProgress from "../components/statistics/StatisticsGroupProgress";
import StatisticsTeamRanking from "../components/statistics/StatisticsTeamRanking";
import StatisticsRecentActivity from "../components/statistics/StatisticsRecentActivity";

export default function StatisticsScreen() {

    const {
        stats,
        recentActivity,
        teamProgress,
        sectionProgress,
    } = useAlbum();

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView>

                <StatisticsSummaryCard stats={stats} />

                <StatisticsQuickStats stats={stats} />

                <StatisticsGroupProgress
                    sections={sectionProgress}
                />

                <StatisticsTeamRanking
                    teams={teamProgress}
                />

                <StatisticsRecentActivity
                    activity={recentActivity}
                />

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

});