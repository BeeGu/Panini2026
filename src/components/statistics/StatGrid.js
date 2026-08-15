// ⭐️ Refactored

import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import StatCard from "./StatCard";

import Spacing from "../../theme/spacing";

export default function StatGrid({ stats }) {
  const { colors } = useTheme();

  const rows = [
    [
      {
        icon: "checkmark-circle-outline",
        color: colors.success,
        title: "Owned",
        value: stats.owned,
        subtitle: `of ${stats.total}`,
      },
      {
        icon: "ellipse-outline",
        color: colors.warning,
        title: "Missing",
        value: stats.missing,
        subtitle: `${stats.completion}% complete`,
      },
    ],
    [
      {
        icon: "copy-outline",
        color: colors.primary,
        title: "Duplicates",
        value: stats.duplicates,
        subtitle: "Available for trade",
      },
      {
        icon: "stats-chart-outline",
        color: colors.primary,
        title: "Completion",
        value: `${stats.completion}%`,
        subtitle: `${stats.owned}/${stats.total}`,
      },
    ],
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },

  row: {
    flexDirection: "row",
    gap: Spacing.md,
  },
});
