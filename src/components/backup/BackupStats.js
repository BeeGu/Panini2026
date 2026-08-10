import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import FileUtils from "../../utils/FileUtils";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function BackupStats({ backups = [] }) {
  const { colors } = useTheme();

  const totalBackups = backups.length;

  const totalSize = backups.reduce(
    (sum, backup) => sum + (backup.size || 0),
    0,
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.item}>
        <Ionicons name="archive-outline" size={22} color={colors.primary} />

        <View style={styles.info}>
          <Text
            style={[
              styles.value,
              {
                color: colors.text,
              },
            ]}
          >
            {totalBackups}
          </Text>

          <Text
            style={[
              styles.label,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            Backups
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Ionicons name="server-outline" size={22} color={colors.info} />

        <View style={styles.info}>
          <Text
            style={[
              styles.value,
              {
                color: colors.text,
              },
            ]}
          >
            {FileUtils.formatSize(totalSize)}
          </Text>

          <Text
            style={[
              styles.label,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            Total size
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",

    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,

    padding: Spacing.lg,

    borderRadius: 16,
    borderWidth: 1,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    marginLeft: Spacing.sm,
  },

  value: {
    fontSize: Typography.h3,
    fontWeight: "700",
  },

  label: {
    fontSize: Typography.caption,
  },
});
