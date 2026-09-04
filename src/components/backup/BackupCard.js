import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import { formatRelativeDate } from "../../utils/dateUtils";

import FileUtils from "../../utils/FileUtils";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import Button from "../common/Button";

export default function BackupCard({ backup, onRestore, onShare, onDelete }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { createdAt, stats, size } = backup;

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
        <Ionicons name="archive-outline" size={24} color={colors.primary} />

        <View style={styles.headerText}>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
              },
            ]}
          >
            {t("backup.title")}
          </Text>

          <Text
            style={{
              color: colors.textSecondary,
            }}
          >
            {formatRelativeDate(createdAt, t)}
          </Text>
        </View>
      </View>

      <View style={styles.rows}>
        <View style={styles.row}>
          <View style={styles.stat}>
            <Ionicons name="albums-outline" size={18} color={colors.primary} />

            <Text style={{ color: colors.text }}>
              {stats.owned} / {stats.total}
            </Text>
          </View>

          <Button
            size="small"
            iconOnly
            icon="refresh-outline"
            variant="primary"
            onPress={onRestore}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Ionicons name="gift-outline" size={18} color={colors.warning} />

            <Text style={{ color: colors.text }}>
              {t("backup.duplicatesCount", {
                count: stats.duplicates,
              })}
            </Text>
          </View>

          <Button
            size="small"
            iconOnly
            icon="share-social-outline"
            variant="secondary"
            onPress={onShare}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Ionicons name="document-outline" size={18} color={colors.info} />

            <Text style={{ color: colors.text }}>
              {FileUtils.formatSize(size)}
            </Text>
          </View>

          <Button
            size="small"
            iconOnly
            icon="trash-outline"
            variant="danger"
            onPress={onDelete}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing.lg,
  },

  headerText: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  title: {
    fontSize: Typography.body,
    fontWeight: "700",
  },

  rows: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
    gap: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  stat: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
