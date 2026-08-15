import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ProgressBar from "../common/ProgressBar";

// import StatisticsService from "../../services/StatisticsService";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ProgressItem({
  title,
  owned = 0,
  total = 0,
  subtitle,
  initiallyExpanded = false,
}) {
  const { colors } = useTheme();

  const [expanded, setExpanded] = useState(initiallyExpanded);

  const safeOwned = Math.max(0, owned);
  const safeTotal = Math.max(0, total);

  const missing = Math.max(safeTotal - safeOwned, 0);

  // const percentage = StatisticsService.calculateProgress(safeTotal, safeOwned);

  const percentage =
    safeTotal > 0 ? Number(((safeOwned / safeTotal) * 100).toFixed(1)) : 0;

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
        onPress={() => setExpanded((value) => !value)}
        style={({ pressed }) => [styles.header, pressed && styles.pressed]}
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
              name={expanded ? "chevron-up" : "chevron-down"}
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

      <ProgressBar value={safeOwned} max={safeTotal} />

      {expanded && (
        <View
          style={[
            styles.details,
            {
              borderTopColor: colors.border,
            },
          ]}
        >
          <StatRow label="Owned" value={safeOwned} color={colors.success} />

          <StatRow label="Missing" value={missing} color={colors.danger} />

          <StatRow label="Total" value={safeTotal} color={colors.text} />
        </View>
      )}
    </View>
  );
}

function StatRow({ label, value, color }) {
  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>

      <Text
        style={[
          styles.statValue,
          {
            color,
          },
        ]}
      >
        {value}
      </Text>
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
