import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function AchievementCard({
    achievement,
}) {
    const { colors } = useTheme();

    return (

        <View
            style={[
                styles.card,
                {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                },
            ]}
        >

            <View style={styles.header}>

                <Ionicons
                    name={achievement.icon}
                    size={26}
                    color={
                        achievement.completed
                            ? colors.success
                            : colors.primary
                    }
                />

                <View style={styles.info}>

                    <Text
                        style={[
                            styles.title,
                            {
                                color: colors.text,
                            },
                        ]}
                    >
                        {achievement.title}
                    </Text>

                    <Text
                        style={[
                            styles.description,
                            {
                                color: colors.textSecondary,
                            },
                        ]}
                    >
                        {achievement.description}
                    </Text>

                </View>

            </View>

            <ProgressBar
                value={achievement.progress}
                max={achievement.target}
            />

            <View style={styles.footer}>

                {achievement.completed ? (
                    <Text
                        style={{
                            color: colors.success,
                            fontWeight: "700",
                        }}
                    >
                        ✓ Completed
                    </Text>
                ) : (
                    <Text
                        style={{
                            color: colors.textSecondary,
                        }}
                    >
                        {achievement.progress} / {achievement.target}
                    </Text>
                )}

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        borderWidth: 1,
        borderRadius: 14,
        padding: Spacing.md,
        marginBottom: Spacing.md,
    },

    header: {
        flexDirection: "row",
        marginBottom: Spacing.md,
        alignItems: "center",
    },

    info: {
        flex: 1,
        marginLeft: Spacing.md,
    },

    title: {
        fontSize: Typography.body,
        fontWeight: "700",
    },

    description: {
        marginTop: 2,
        fontSize: Typography.caption,
    },

    footer: {
        marginTop: Spacing.sm,
        alignItems: "flex-end",
    },

});