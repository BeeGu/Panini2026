import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import useAlbum from "../../../hooks/useAlbum";
import useTheme from "../../../hooks/useTheme";

import StatisticsService from "../../../services/StatisticsService";

import StatisticsChartCard from "./StatisticsChartCard";

export default function AlbumPieChart() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { stats } = useAlbum();

  const data = StatisticsService.getAlbumChart(stats, colors);

  return (
    <StatisticsChartCard
      title={t("statistics.albumCompletion")}
      subtitle={t("statistics.completedPercentage", {
        percentage: stats.completion,
      })}
      legend={data}
    >
      <PieChart
        data={data}
        donut
        radius={95}
        innerRadius={62}
        strokeWidth={3}
        strokeColor={colors.card}
        innerCircleColor={colors.card}
        showGradient
        focusOnPress={false}
        centerLabelComponent={() => (
          <View style={styles.centerLabel}>
            <Text
              style={[
                styles.percentage,
                {
                  color: colors.text,
                },
              ]}
            >
              {stats.completion}%
            </Text>

            <Text
              style={[
                styles.count,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {stats.owned} / {stats.total}
            </Text>
          </View>
        )}
      />
    </StatisticsChartCard>
  );
}

const styles = StyleSheet.create({
  centerLabel: {
    alignItems: "center",
  },

  percentage: {
    fontSize: 30,
    fontWeight: "700",
  },

  count: {
    marginTop: 2,
  },
});
