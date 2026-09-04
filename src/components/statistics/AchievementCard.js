import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function AchievementCard({ achievement }) {
  const { colors } = useTheme();

  const { icon, title, description, progress, target, completed } = achievement;

  const iconColor = completed ? colors.success : colors.primary;

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
        <Ionicons name={icon} size={26} color={iconColor} />

        <View style={styles.info}>
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
        </View>
      </View>

      <ProgressBar value={progress} max={target} />

      <View style={styles.footer}>
        {completed ? (
          <Text
            style={[
              styles.completed,
              {
                color: colors.success,
              },
            ]}
          >
            ✓ Completed
          </Text>
        ) : (
          <Text
            style={[
              styles.progress,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {progress} / {target}
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
    alignItems: "center",
    marginBottom: Spacing.md,
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

  completed: {
    fontWeight: "700",
  },

  progress: {},
});
