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
  const { colors } = useTheme();

  if (!backup) return null;

  return (
    <ConfirmDialog
      visible={visible}
      title="Delete backup"
      icon="trash-outline"
      iconColor={colors.danger}
      confirmText="Delete"
      confirmVariant="danger"
      cancelText="Cancel"
      showCloseButton
      onConfirm={onDelete}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons name="calendar-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {formatRelativeDate(backup.createdAt)}
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
          {backup.stats.duplicates} duplicates
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
        This backup file will be permanently deleted.
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
