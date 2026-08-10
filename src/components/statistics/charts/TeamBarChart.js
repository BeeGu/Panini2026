import { BarChart } from "react-native-gifted-charts";

import useAlbum from "../../../hooks/useAlbum";
import useTheme from "../../../hooks/useTheme";

import StatisticsChartCard from "./StatisticsChartCard";
import StatisticsService from "../../../services/StatisticsService";

export default function TeamBarChart() {

    const { colors } = useTheme();

    const { teamProgress } = useAlbum();
/*
    const data = [...teamProgress]

        .sort((a, b) => b.completion - a.completion)

        .slice(0, 10)

        .map(team => ({

            value: team.completion,

            label: team.team.name,

            frontColor: colors.primary,

        }));
*/

const data = StatisticsService.buildBarChartData(
    StatisticsService.getTopTeams(teamProgress),
    colors
);
  
/*
function getBarColor(value) {

    if (value >= 100)
        return "#22C55E";

    if (value >= 75)
        return "#84CC16";

    if (value >= 50)
        return "#FACC15";

    if (value >= 25)
        return "#FB923C";

    return "#EF4444";

}
*/
    return (

        <StatisticsChartCard
            title="Top Teams"
            subtitle="Best completed teams"
        >

            <BarChart

                data={data}

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