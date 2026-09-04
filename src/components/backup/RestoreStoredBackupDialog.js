import { useTranslation } from "react-i18next";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import { formatRelativeDate } from "../../utils/dateUtils";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function RestoreStoredBackupDialog({
  visible,
  backup,
  onRestore,
  onCancel,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  if (!backup) return null;

  return (
    <ConfirmDialog
      visible={visible}
      title={t("backup.restoreBackup")}
      icon="refresh-circle-outline"
      iconColor={colors.primary}
      confirmText={t("backup.restore")}
      confirmVariant="primary"
      cancelText={t("common.cancel")}
      showCloseButton
      onConfirm={onRestore}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons name="calendar-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {formatRelativeDate(backup.createdAt, t)}
        </Text>
      </Row>

      <Row>
        <Ionicons name="albums-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {backup.album}
        </Text>
      </Row>

      <Row>
        <Ionicons
          name="checkmark-circle-outline"
          size={20}
          color={colors.success}
        />

        <Text style={[styles.text, { color: colors.text }]}>
          {t("backup.owned")}: {backup.stats.owned}
        </Text>
      </Row>

      <Row>
        <Ionicons
          name="alert-circle-outline"
          size={20}
          color={colors.warning}
        />

        <Text style={[styles.text, { color: colors.text }]}>
          {t("backup.missing")}: {backup.stats.missing}
        </Text>
      </Row>

      <Row>
        <Ionicons name="gift-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {t("backup.duplicates")}: {backup.stats.duplicates}
        </Text>
      </Row>

      <Text
        style={[
          styles.warning,
          {
            color: colors.warning,
          },
        ]}
      >
        {t("backup.currentCollectionReplaced")}
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
