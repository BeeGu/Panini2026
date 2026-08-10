import { View, StyleSheet } from "react-native";

import StatisticCard from "./StatisticCard";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function DashboardStats({ stats }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={styles.row}>
        <StatisticCard
          title="Owned"
          value={stats.owned}
          icon="checkmark-circle"
          color={colors.success}
        />

        <StatisticCard
          title="Missing"
          value={stats.missing}
          icon="ellipse-outline"
          color={colors.warning}
        />
      </View>

      <View style={styles.row}>
        <StatisticCard
          title="Duplicates"
          value={stats.duplicates}
          icon="copy-outline"
          color={colors.primary}
        />

        <StatisticCard
          title="Completed"
          value={`${stats.completion}%`}
          icon="trophy-outline"
          color={colors.primary}
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
