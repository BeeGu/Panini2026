import { StyleSheet, Text, View } from "react-native";

import useTheme from "../../../hooks/useTheme";

import Card from "../../common/Card";

import Typography from "../../../theme/typography";
import Spacing from "../../../theme/spacing";

import ChartLegend from "./ChartLegend";

export default function StatisticsChartCard({
    title,
    subtitle,
    children,
    footer,
    legend,
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

                {!!subtitle && (

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

            <View style={styles.chart}>

                {children}

            </View>

{!!legend && (

    <View style={styles.legend}>

        <ChartLegend
            items={legend}
        />

    </View>

)}
          
            {!!footer && (

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
        alignItems: "center",
        justifyContent: "center",
        minHeight: 220,
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