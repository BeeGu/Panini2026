import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function AchievementCard({
  icon,
  title,
  description,
  unlocked = false,
  progress = 0,
}) {
  const { colors } = useTheme();

  const percentage = Math.max(0, Math.min(progress, 100));

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: unlocked ? colors.primary : colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: unlocked
              ? colors.achievementBackground
              : colors.achievementLockedBackground,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={28}
          color={unlocked ? colors.primary : colors.textMuted}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
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

          {unlocked && (
            <Ionicons
              name="checkmark-circle"
              size={20}
              color={colors.success}
            />
          )}
        </View>

        <Text
          style={[
            styles.description,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {description}
        </Text>

        <View
          style={[
            styles.progressTrack,
            {
              backgroundColor: colors.progressTrack,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${percentage}%`,
                backgroundColor: unlocked ? colors.success : colors.primary,
              },
            ]}
          />
        </View>

        <Text
          style={[
            styles.progressText,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {Math.round(percentage)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",

    borderWidth: 1,
    borderRadius: 14,

    padding: Spacing.md,

    marginBottom: Spacing.md,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  iconContainer: {
    width: 54,
    height: 54,

    borderRadius: 27,

    alignItems: "center",
    justifyContent: "center",

    marginRight: Spacing.md,
  },

  content: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: Typography.body,
    fontWeight: "700",
    flex: 1,
  },

  description: {
    marginTop: 4,
    fontSize: Typography.caption,
    lineHeight: 18,
  },

  progressTrack: {
    height: 7,

    borderRadius: 100,

    overflow: "hidden",

    marginTop: 10,
  },

  progressFill: {
    height: "100%",
    borderRadius: 100,
  },

  progressText: {
    marginTop: 4,

    fontSize: 11,
    fontWeight: "600",

    textAlign: "right",
  },
});
