import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import StatCard from "./StatCard";

import Spacing from "../../theme/spacing";

export default function StatGrid({
    stats,
}) {

    const { colors } = useTheme();

    return (

        <>

            <View style={styles.row}>

                <StatCard
                    icon="checkmark-circle-outline"
                    color={colors.success}
                    title="Owned"
                    value={stats.owned}
                    subtitle={`of ${stats.total}`}
                />

                <StatCard
                    icon="ellipse-outline"
                    color={colors.warning}
                    title="Missing"
                    value={stats.missing}
                    subtitle={`${stats.completion}% complete`}
                />

            </View>

            <View style={styles.row}>

                <StatCard
                    icon="copy-outline"
                    color={colors.primary}
                    title="Duplicates"
                    value={stats.duplicates}
                    subtitle="Available for trade"
                />

                <StatCard
                    icon="stats-chart-outline"
                    color={colors.primary}
                    title="Completion"
                    value={`${stats.completion}%`}
                    subtitle={`${stats.owned}/${stats.total}`}
                />

            </View>

        </>

    );

}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        gap: Spacing.md,
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.md,
    },

});