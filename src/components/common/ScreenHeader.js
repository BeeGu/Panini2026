import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "./ProgressBar";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

import MathUtils from "../../utils/MathUtils";

export default function ScreenHeader({
  title,
  subtitle,

  icon,
  iconSize = 28,

  owned,
  total,

  rightComponent,

  children,
}) {
  const { colors } = useTheme();

  const hasProgress = owned !== undefined && total !== undefined;

  const percentage = hasProgress ? MathUtils.percentage(owned, total, 0) : 0;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <View style={styles.headerRow}>
        <View style={styles.left}>
          {!!icon && (
            <Ionicons
              name={icon}
              size={iconSize}
              color={colors.primary}
              style={styles.icon}
            />
          )}

          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: colors.primary,
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
        </View>

        {rightComponent}
      </View>

      {hasProgress && (
        <>
          <Text
            style={[
              styles.progressText,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {owned} / {total} stickers ({percentage}%)
          </Text>

          <ProgressBar value={owned} max={total} height={12} />
        </>
      )}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 12,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: Typography.h1,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.body,
  },

  progressText: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: Typography.body,
  },
});
