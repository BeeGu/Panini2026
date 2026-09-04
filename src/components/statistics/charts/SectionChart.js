import { useTranslation } from "react-i18next";
import { BarChart } from "react-native-gifted-charts";

import useTheme from "../../../hooks/useTheme";
import useAlbum from "../../../hooks/useAlbum";

import StatisticsChartCard from "./StatisticsChartCard";

export default function SectionChart() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { chartData } = useAlbum();

  const data = chartData?.sections ?? [];

  return (
    <StatisticsChartCard
      title={t("statistics.sections")}
      subtitle={t("statistics.completionBySection")}
    >
      <BarChart
        data={data}
        horizontal
        roundedTop
        roundedBottom
        barWidth={16}
        spacing={12}
        hideRules
        xAxisColor={colors.border}
        yAxisColor={colors.border}
        xAxisLabelTextStyle={{
          color: colors.textSecondary,
        }}
        yAxisTextStyle={{
          color: colors.text,
          fontSize: 11,
        }}
        noOfSections={4}
        maxValue={100}
        isAnimated
        animationDuration={700}
      />
    </StatisticsChartCard>
  );
}
