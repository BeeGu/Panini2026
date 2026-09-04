import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Card from "../common/Card";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
  iconSize = 30,
}) {
  const { colors } = useTheme();

  const accentColor = color ?? colors.primary;

  return (
    <Card style={styles.card}>
      {icon && <Ionicons name={icon} size={iconSize} color={accentColor} />}

      <Text
        style={[
          styles.value,
          {
            color: accentColor,
          },
        ]}
      >
        {value}
      </Text>

      <Text
        style={[
          styles.title,
          {
            color: colors.textSecondary,
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
              color: colors.textMuted,
            },
          ]}
        >
          {subtitle}
        </Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },

  value: {
    marginTop: 10,
    fontSize: Typography.h2,
    fontWeight: "700",
  },

  title: {
    marginTop: 6,
    fontSize: Typography.body,
    fontWeight: "600",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.caption,
    textAlign: "center",
  },
});
