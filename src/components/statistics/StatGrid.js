import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import StatCard from "./StatCard";

import Spacing from "../../theme/spacing";

export default function StatGrid({ stats }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const rows = [
    [
      {
        icon: "checkmark-circle-outline",
        color: colors.success,
        title: t("statistics.owned"),
        value: stats.owned,
        subtitle: t("statistics.ofTotal", {
          total: stats.total,
        }),
      },
      {
        icon: "ellipse-outline",
        color: colors.warning,
        title: t("statistics.missing"),
        value: stats.missing,
        subtitle: t("statistics.completePercentage", {
          percentage: stats.completion,
        }),
      },
    ],
    [
      {
        icon: "copy-outline",
        color: colors.primary,
        title: t("statistics.duplicates"),
        value: stats.duplicates,
        subtitle: t("statistics.availableForTrade"),
      },
      {
        icon: "stats-chart-outline",
        color: colors.primary,
        title: t("statistics.completion"),
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
