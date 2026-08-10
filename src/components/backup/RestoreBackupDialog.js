import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import { formatRelativeDate } from "../../utils/dateUtils";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function RestoreBackupDialog({
  visible,
  backup,
  onRestore,
  onCancel,
}) {
  const { colors } = useTheme();

  if (!backup) return null;

  function InfoRow({ icon, color, children }) {
    const { colors } = useTheme();

    return (
      <Row>
        <Ionicons name={icon} size={20} color={color} />

        <Text
          style={[
            styles.text,
            {
              color: colors.text,
            },
          ]}
        >
          {children}
        </Text>
      </Row>
    );
  }

  return (
    <ConfirmDialog
      visible={visible}
      title="Restore backup"
      icon="refresh-circle-outline"
      iconColor={colors.primary}
      confirmText="Restore"
      confirmVariant="primary"
      showCloseButton={true}
      onConfirm={onRestore}
      onCancel={onCancel}
    >
      <InfoRow icon="time-outline" color={colors.primary}>
        {formatRelativeDate(backup.createdAt)}
      </InfoRow>

      <InfoRow icon="albums-outline" color={colors.primary}>
        {backup.album}
      </InfoRow>

      <InfoRow icon="checkmark-circle-outline" color={colors.success}>
        Owned: {backup.stats.owned}
      </InfoRow>

      <InfoRow icon="alert-circle-outline" color={colors.warning}>
        Missing: {backup.stats.missing}
      </InfoRow>

      <InfoRow icon="gift-outline" color={colors.primary}>
        Duplicates: {backup.stats.duplicates}
      </InfoRow>

      <Row style={styles.warningContainer}>
        <Ionicons name="warning-outline" size={20} color={colors.danger} />

        <Text
          style={[
            styles.warning,
            {
              color: colors.danger,
            },
          ]}
        >
          Your current collection will be replaced by this backup.
        </Text>
      </Row>
    </ConfirmDialog>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.body,
  },

  warningContainer: {
    marginTop: Spacing.lg,
    alignItems: "flex-start",
  },

  warning: {
    flex: 1,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});
