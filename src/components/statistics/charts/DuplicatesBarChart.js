import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import useTheme from "../../../hooks/useTheme";

import StatisticsChartCard from "./StatisticsChartCard";

import Spacing from "../../../theme/spacing";
import Typography from "../../../theme/typography";

export default function DuplicatesBarChart({ data = [] }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <StatisticsChartCard
      title={t("statistics.duplicates")}
      subtitle={t("statistics.duplicatesByCategory")}
    >
      <View style={styles.container}>
        {data.map((item) => {
          const percentage = (item.value / max) * 100;

          const label =
            item.label === "None" ? t("statistics.none") : item.label;

          return (
            <View key={item.label} style={styles.item}>
              <View style={styles.labelRow}>
                <Text
                  style={[
                    styles.label,
                    {
                      color: colors.text,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {label}
                </Text>

                <Text
                  style={[
                    styles.value,
                    {
                      color: colors.textSecondary,
                    },
                  ]}
                >
                  {item.value}
                </Text>
              </View>

              <View
                style={[
                  styles.track,
                  {
                    backgroundColor: colors.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.bar,
                    {
                      width: `${percentage}%`,
                      backgroundColor: colors.primary,
                    },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </StatisticsChartCard>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  item: {
    marginBottom: Spacing.md,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.xs,
  },

  label: {
    flex: 1,
    marginRight: Spacing.md,
    fontSize: Typography.caption,
  },

  value: {
    fontSize: Typography.caption,
    fontWeight: "700",
  },

  track: {
    height: 12,
    borderRadius: 6,
    overflow: "hidden",
  },

  bar: {
    height: "100%",
    borderRadius: 6,
  },
});
