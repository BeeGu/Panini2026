import { useTranslation } from "react-i18next";
import { BarChart } from "react-native-gifted-charts";

import useTheme from "../../../hooks/useTheme";

import StatisticsChartCard from "./StatisticsChartCard";

export default function TeamBarChart({ data }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const chartData = data.map((team) => ({
    value: team.completion,
    label: team.name,
    frontColor: colors.primary,
  }));

  return (
    <StatisticsChartCard
      title={t("statistics.topTeams")}
      subtitle={t("statistics.bestCompletedTeams")}
    >
      <BarChart
        // data={data}
        data={chartData}
        horizontal
        roundedTop
        roundedBottom
        barWidth={18}
        spacing={18}
        hideRules
        hideYAxisText={false}
        xAxisColor={colors.border}
        yAxisColor={colors.border}
        xAxisLabelTextStyle={{
          color: colors.textSecondary,
        }}
        yAxisTextStyle={{
          color: colors.text,
        }}
        noOfSections={4}
        maxValue={100}
        isAnimated
        animationDuration={900}
      />
    </StatisticsChartCard>
  );
}
