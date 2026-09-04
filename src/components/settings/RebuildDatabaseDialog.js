import { useTranslation } from "react-i18next";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function RebuildDatabaseDialog({
  visible,
  onCancel,
  onRebuild,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ConfirmDialog
      visible={visible}
      title={t("settings.rebuildDatabaseDialogTitle")}
      icon="construct-outline"
      iconColor={colors.danger}
      confirmText={t("settings.rebuildDatabaseConfirm")}
      confirmVariant="danger"
      cancelText={t("common.cancel")}
      cancelVariant="secondary"
      showCloseButton
      onConfirm={onRebuild}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons
          name="information-circle-outline"
          size={22}
          color={colors.primary}
        />

        <Text
          style={[
            styles.text,
            {
              color: colors.text,
            },
          ]}
        >
          {t("settings.rebuildDatabaseMessage")}
        </Text>
      </Row>

      <Row style={styles.warning}>
        <Ionicons name="warning-outline" size={22} color={colors.danger} />

        <Text
          style={[
            styles.warningText,
            {
              color: colors.danger,
            },
          ]}
        >
          {t("settings.rebuildDatabaseWarning")}
        </Text>
      </Row>
    </ConfirmDialog>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: Typography.body,
  },

  warning: {
    marginTop: Spacing.lg,
    alignItems: "flex-start",
  },

  warningText: {
    flex: 1,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});
