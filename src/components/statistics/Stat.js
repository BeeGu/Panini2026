/*
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function Stat({
    label,
    value,
    icon,
}) {

    const { colors } = useTheme();

    return (

        <View style={styles.container}>

            {icon && (
                <Text
                    style={[
                        styles.icon,
                        {
                            color: colors.primary,
                        },
                    ]}
                >
                    {icon}
                </Text>
            )}

            <Text
                style={[
                    styles.value,
                    {
                        color: colors.text,
                    },
                ]}
            >
                {value}
            </Text>

            <Text
                style={[
                    styles.label,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {label}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: Spacing.sm,
    },

    icon: {
        fontSize: 20,
        marginBottom: 4,
    },

    value: {
        fontSize: Typography.h2,
        fontWeight: "700",
    },

    label: {
        marginTop: 2,
        fontSize: Typography.caption,
        fontWeight: "600",
    },

});
*/
/*
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function Stat({
    label,
    value,
    icon,
}) {

    const { colors } = useTheme();

    return (

        <View style={styles.container}>

            {icon && (
                <Ionicons
                    name={icon}
                    size={22}
                    color={colors.primary}
                    style={styles.icon}
                />
            )}

            <Text
                style={[
                    styles.value,
                    {
                        color: colors.text,
                    },
                ]}
            >
                {value}
            </Text>

            <Text
                style={[
                    styles.label,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {label}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: Spacing.sm,
    },

    icon: {
        marginBottom: 4,
    },

    value: {
        fontSize: Typography.h2,
        fontWeight: "700",
    },

    label: {
        marginTop: 2,
        fontSize: Typography.caption,
        fontWeight: "600",
    },

});
*/

import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function Stat({
    label,
    value,
    icon = null,
}) {

    const { colors } = useTheme();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}
        >

            {icon && (
                <Text
                    style={[
                        styles.icon,
                        {
                            color: colors.primary,
                        },
                    ]}
                >
                    {icon}
                </Text>
            )}

            <Text
                style={[
                    styles.value,
                    {
                        color: colors.text,
                    },
                ]}
            >
                {value}
            </Text>

            <Text
                style={[
                    styles.label,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {label}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.sm,

        borderWidth: 1,
        borderRadius: 14,
    },

    icon: {
        fontSize: 20,
        marginBottom: 4,
    },

    value: {
        fontSize: Typography.h2,
        fontWeight: "700",
    },

    label: {
        marginTop: 3,
        fontSize: Typography.caption,
        fontWeight: "600",
        textAlign: "center",
    },

});