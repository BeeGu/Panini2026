// ⭐️ Refactored

import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import { formatRelativeDate } from "../../utils/dateUtils";

export default function StatisticsRecentActivity({ activity = [] }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {activity.map((item) => (
        <View key={item.id} style={styles.row}>
          <Ionicons name="time-outline" size={20} color={colors.primary} />

          <View style={styles.info}>
            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}
              numberOfLines={1}
            >
              {item.name}
            </Text>

            <Text
              style={[
                styles.date,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {formatRelativeDate(item.updated_at)}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.md,
  },

  info: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  name: {
    fontSize: Typography.body,
    fontWeight: "600",
  },

  date: {
    marginTop: Spacing.xs,
    fontSize: Typography.caption,
  },
});
