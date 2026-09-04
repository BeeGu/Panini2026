import { useTranslation } from "react-i18next";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import { formatRelativeDate } from "../../utils/dateUtils";
import FileUtils from "../../utils/FileUtils";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function DeleteBackupDialog({
  visible,
  backup,
  onDelete,
  onCancel,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  if (!backup) return null;

  return (
    <ConfirmDialog
      visible={visible}
      title={t("backup.deleteTitle")}
      icon="trash-outline"
      iconColor={colors.danger}
      confirmText={t("backup.deleteConfirm")}
      confirmVariant="danger"
      cancelText={t("common.cancel")}
      showCloseButton
      onConfirm={onDelete}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons name="calendar-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {formatRelativeDate(backup.createdAt, t)}
        </Text>
      </Row>

      <Row>
        <Ionicons name="document-outline" size={20} color={colors.info} />

        <Text style={[styles.text, { color: colors.text }]}>
          {FileUtils.formatSize(backup.size)}
        </Text>
      </Row>

      <Row>
        <Ionicons name="albums-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {backup.stats.owned} / {backup.stats.total}
        </Text>
      </Row>

      <Row>
        <Ionicons name="gift-outline" size={20} color={colors.warning} />

        <Text style={[styles.text, { color: colors.text }]}>
          {t("backup.duplicatesCount", {
            count: backup.stats.duplicates,
          })}
        </Text>
      </Row>

      <Text
        style={[
          styles.warning,
          {
            color: colors.danger,
          },
        ]}
      >
        {t("backup.deleteWarning")}
      </Text>
    </ConfirmDialog>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.body,
  },

  warning: {
    marginTop: Spacing.lg,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});
