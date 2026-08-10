/*
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ProgressItem({
    label,
    value,
    max,
    percentage,
    color,
}) {

    const { colors } = useTheme();

    const percent = percentage ?? (
        max > 0
            ? (value / max) * 100
            : 0
    );

    return (

        <View style={styles.container}>

            <View style={styles.header}>

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
                    {value} / {max}
                </Text>

                <Text
                    style={[
                        styles.percentage,
                        {
                            color:
                                color ??
                                colors.primary,
                        },
                    ]}
                >
                    {percent.toFixed(1)}%
                </Text>

            </View>

            <ProgressBar
                value={value}
                max={max}
                color={color}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        marginBottom: Spacing.md,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    label: {
        flex: 1,
        fontSize: Typography.body,
        fontWeight: "600",
    },

    value: {
        marginLeft: Spacing.sm,
        fontSize: Typography.caption,
    },

    percentage: {
        minWidth: 48,
        marginLeft: Spacing.sm,
        textAlign: "right",
        fontSize: Typography.caption,
        fontWeight: "700",
    },

});
*/

/*
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ProgressItem({
    title,
    owned,
    total,
    subtitle,
}) {

    const { colors } = useTheme();

    const missing = Math.max(
        total - owned,
        0
    );

    const percentage = total > 0
        ? Math.round((owned / total) * 100)
        : 0;

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

            <View style={styles.header}>

                <View style={styles.titleContainer}>

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

                <Text
                    style={[
                        styles.percentage,
                        {
                            color: colors.primary,
                        },
                    ]}
                >
                    {percentage}%
                </Text>

            </View>

            <ProgressBar
                value={owned}
                max={total}
            />

            <View style={styles.footer}>

                <Text
                    style={[
                        styles.stat,
                        {
                            color: colors.success,
                        },
                    ]}
                >
                    {owned} owned
                </Text>

                <Text
                    style={[
                        styles.stat,
                        {
                            color: colors.textSecondary,
                        },
                    ]}
                >
                    {total} total
                </Text>

                <Text
                    style={[
                        styles.stat,
                        {
                            color: colors.danger,
                        },
                    ]}
                >
                    {missing} missing
                </Text>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        padding: Spacing.md,

        borderWidth: 1,
        borderRadius: 14,

        marginBottom: Spacing.md,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: Spacing.sm,
    },

    titleContainer: {
        flex: 1,
    },

    title: {
        fontSize: Typography.body,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 2,
        fontSize: Typography.caption,
    },

    percentage: {
        marginLeft: Spacing.md,
        fontSize: Typography.body,
        fontWeight: "700",
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",

        marginTop: Spacing.sm,
    },

    stat: {
        fontSize: Typography.caption,
        fontWeight: "600",
    },

});
*/

import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ProgressItem({
    title,
    owned,
    total,
    subtitle,
    initiallyExpanded = false,
}) {

    const { colors } = useTheme();

    const [expanded, setExpanded] = useState(
        initiallyExpanded
    );

    const missing = Math.max(
        total - owned,
        0
    );

    const percentage = total > 0
        ? Math.round((owned / total) * 100)
        : 0;

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

            <Pressable
                onPress={() => setExpanded(value => !value)}
                style={({ pressed }) => [
                    styles.header,
                    pressed && styles.pressed,
                ]}
            >

                <View style={styles.titleContainer}>

                    <View style={styles.titleRow}>

                        <Text
                            style={[
                                styles.title,
                                {
                                    color: colors.text,
                                },
                            ]}
                            numberOfLines={1}
                        >
                            {title}
                        </Text>

                        <Ionicons
                            name={
                                expanded
                                    ? "chevron-up"
                                    : "chevron-down"
                            }
                            size={20}
                            color={colors.icon}
                        />

                    </View>

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

                <Text
                    style={[
                        styles.percentage,
                        {
                            color: colors.primary,
                        },
                    ]}
                >
                    {percentage}%
                </Text>

            </Pressable>


            <ProgressBar
                value={owned}
                max={total}
            />


            {expanded && (

                <View
                    style={[
                        styles.details,
                        {
                            borderTopColor: colors.border,
                        },
                    ]}
                >

                    <View style={styles.statRow}>

                        <Text
                            style={[
                                styles.statLabel,
                                {
                                    color: colors.textSecondary,
                                },
                            ]}
                        >
                            Owned
                        </Text>

                        <Text
                            style={[
                                styles.statValue,
                                {
                                    color: colors.success,
                                },
                            ]}
                        >
                            {owned}
                        </Text>

                    </View>


                    <View style={styles.statRow}>

                        <Text
                            style={[
                                styles.statLabel,
                                {
                                    color: colors.textSecondary,
                                },
                            ]}
                        >
                            Missing
                        </Text>

                        <Text
                            style={[
                                styles.statValue,
                                {
                                    color: colors.danger,
                                },
                            ]}
                        >
                            {missing}
                        </Text>

                    </View>


                    <View style={styles.statRow}>

                        <Text
                            style={[
                                styles.statLabel,
                                {
                                    color: colors.textSecondary,
                                },
                            ]}
                        >
                            Total
                        </Text>

                        <Text
                            style={[
                                styles.statValue,
                                {
                                    color: colors.text,
                                },
                            ]}
                        >
                            {total}
                        </Text>

                    </View>

                </View>

            )}

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        padding: Spacing.md,

        borderWidth: 1,
        borderRadius: 14,

        marginBottom: Spacing.md,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: Spacing.sm,
    },

    titleContainer: {
        flex: 1,
        marginRight: Spacing.md,
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        flex: 1,
        fontSize: Typography.body,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 3,
        fontSize: Typography.caption,
    },

    percentage: {
        fontSize: Typography.body,
        fontWeight: "700",
    },

    pressed: {
        opacity: 0.7,
    },

    details: {
        marginTop: Spacing.md,
        paddingTop: Spacing.md,

        borderTopWidth: 1,
    },

    statRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingVertical: 5,
    },

    statLabel: {
        fontSize: Typography.caption,
    },

    statValue: {
        fontSize: Typography.caption,
        fontWeight: "700",
    },

});