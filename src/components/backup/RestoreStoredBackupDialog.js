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
  const { colors } = useTheme();

  if (!backup) return null;

  return (
    <ConfirmDialog
      visible={visible}
      title="Restore backup"
      icon="refresh-circle-outline"
      iconColor={colors.primary}
      confirmText="Restore"
      confirmVariant="primary"
      cancelText="Cancel"
      showCloseButton
      onConfirm={onRestore}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons name="calendar-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          {formatRelativeDate(backup.createdAt)}
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
          Owned: {backup.stats.owned}
        </Text>
      </Row>

      <Row>
        <Ionicons
          name="alert-circle-outline"
          size={20}
          color={colors.warning}
        />

        <Text style={[styles.text, { color: colors.text }]}>
          Missing: {backup.stats.missing}
        </Text>
      </Row>

      <Row>
        <Ionicons name="gift-outline" size={20} color={colors.primary} />

        <Text style={[styles.text, { color: colors.text }]}>
          Duplicates: {backup.stats.duplicates}
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
        Your current collection will be replaced by this backup.
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
