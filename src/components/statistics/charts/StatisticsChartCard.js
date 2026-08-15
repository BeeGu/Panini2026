// ⭐️ Refactored

import { StyleSheet, Text, View } from "react-native";

import useTheme from "../../../hooks/useTheme";

import Card from "../../common/Card";
import ChartLegend from "./ChartLegend";

import Typography from "../../../theme/typography";
import Spacing from "../../../theme/spacing";

export default function StatisticsChartCard({
  title,
  subtitle,
  children,
  legend,
  footer,
}) {
  const { colors } = useTheme();

  return (
    <Card>
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          {title}
        </Text>

        {subtitle && (
          <Text
            style={[
              styles.subtitle,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {subtitle}
          </Text>
        )}
      </View>

      <View style={styles.chart}>{children}</View>

      {legend && legend.length > 0 && (
        <View style={styles.legend}>
          <ChartLegend items={legend} />
        </View>
      )}

      {footer && (
        <View
          style={[
            styles.footer,
            {
              borderTopColor: colors.border,
            },
          ]}
        >
          {footer}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: Spacing.md,
  },

  title: {
    fontSize: Typography.h3,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 2,
    fontSize: Typography.caption,
  },

  chart: {
    minHeight: 220,
    alignItems: "center",
    justifyContent: "center",
  },

  legend: {
    marginTop: Spacing.md,
  },

  footer: {
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
  },
});
