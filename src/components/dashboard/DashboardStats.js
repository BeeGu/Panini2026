import { View, StyleSheet } from "react-native";

import StatisticCard from "./StatisticCard";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function DashboardStats({
    stats,
}) {

    return (

        <View style={styles.container}>

            <View style={styles.row}>

                <StatisticCard
                    title="Owned"
                    value={stats.owned}
                    icon="checkmark-circle"
                    color={Colors.success}
                />

                <StatisticCard
                    title="Missing"
                    value={stats.missing}
                    icon="ellipse-outline"
                    color={Colors.warning}
                />

            </View>

            <View style={styles.row}>

                <StatisticCard
                    title="Duplicates"
                    value={stats.duplicates}
                    icon="copy-outline"
                    color={Colors.primary}
                />

                <StatisticCard
                    title="Completed"
                    value={`${stats.completion}%`}
                    icon="trophy-outline"
                    color={Colors.primary}
                />

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: "90%",
        marginTop: Spacing.lg,
    },

    row: {
        flexDirection: "row",
        marginBottom: Spacing.sm,
    },

});