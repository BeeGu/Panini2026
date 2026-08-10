
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import useTheme from "../../../hooks/useTheme";
import useAlbum from "../../../hooks/useAlbum";

import StatisticsChartCard from "./StatisticsChartCard";
import StatisticsService from "../../../services/StatisticsService";

export default function AlbumPieChart() {

    const { colors } = useTheme();
    const { stats } = useAlbum();

    const data = StatisticsService.getAlbumChart(
        stats,
        colors
    );

    return (

        <StatisticsChartCard
            title="Album Completion"
            subtitle={`${stats.completion}% completed`}
            legend={data.map(item => ({
                label: item.label,
                value: item.value,
                color: item.color,
            }))}
        >

            <PieChart
                data={data}
                donut
                radius={95}
                innerRadius={62}
                strokeWidth={3}
                strokeColor={colors.card}
                showGradient={true}
                focusOnPress={false}
                innerCircleColor={colors.card}
                centerLabelComponent={() => (
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: "700",
                                color: colors.text,
                            }}
                        >
                            {stats.completion}%
                        </Text>

                        <Text
                            style={{
                                color: colors.textSecondary,
                                marginTop: 2,
                            }}
                        >
                            {stats.owned} / {stats.total}
                        </Text>
                    </View>
                )}
            />
        </StatisticsChartCard>
    );
}