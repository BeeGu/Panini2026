import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function SettingsActionItem({
  icon,
  title,
  subtitle,
  color,
  onPress,
}) {
  const { colors } = useTheme();
  const iconColor = color ?? colors.primary;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={22} color={iconColor} />

        <View style={styles.textContainer}>
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
      </View>

      <Ionicons name="chevron-forward" size={18} color={colors.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.md,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  textContainer: {
    marginLeft: 12,
    flex: 1,
  },

  title: {
    fontSize: Typography.body,
    fontWeight: "600",
  },

  subtitle: {
    marginTop: 2,
    fontSize: Typography.caption,
  },
});
