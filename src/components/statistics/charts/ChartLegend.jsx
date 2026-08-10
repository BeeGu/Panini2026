import { StyleSheet, Text, View } from "react-native";

import useTheme from "../../../hooks/useTheme";

import Spacing from "../../../theme/spacing";
import Typography from "../../../theme/typography";

export default function ChartLegend({
    items,
}) {

    const { colors } = useTheme();

    return (

        <View>

            {items.map(item => (

                <View
                    key={item.label}
                    style={styles.row}
                >

                    <View style={styles.left}>

                        <View
                            style={[
                                styles.dot,
                                {
                                    backgroundColor: item.color,
                                },
                            ]}
                        />

                        <Text
                            style={{
                                color: colors.text,
                            }}
                        >
                            {item.label}
                        </Text>

                    </View>

                    <Text
                        style={[
                            styles.value,
                            {
                                color: colors.text,
                            },
                        ]}
                    >
                        {item.value}
                    </Text>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 4,
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
    },

    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: Spacing.sm,
    },

    value: {
        fontWeight: "700",
        fontSize: Typography.body,
    },

});