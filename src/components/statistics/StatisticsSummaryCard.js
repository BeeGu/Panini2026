import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatisticsSummaryCard({
    stats,
}) {

    const percent = stats.total === 0
        ? 0
        : Math.round(
            (stats.owned / stats.total) * 100
        );

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Album Progress
            </Text>

            <Text style={styles.count}>

                {stats.owned} / {stats.total}

            </Text>

          {/* <ProgressBar
                progress={percent / 100}
            /> */}
            <ProgressBar
                value={stats.owned}
                max={stats.total}
                height={12}
            />

            <Text style={styles.percent}>
                {percent}%
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        backgroundColor: Colors.white,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
    },

    count: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 12,
    },

    percent: {
        marginTop: 12,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: Colors.primary,
    },

});