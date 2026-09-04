import { useTranslation } from "react-i18next";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import useAlbum from "../../hooks/useAlbum";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ResetCollectionDialog({ visible, onCancel, onReset }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ConfirmDialog
      visible={visible}
      title={t("settings.resetCollectionDialogTitle")}
      icon="warning-outline"
      iconColor={colors.danger}
      confirmText={t("settings.resetCollectionConfirm")}
      confirmVariant="danger"
      cancelText={t("common.cancel")}
      cancelVariant="secondary"
      showCloseButton
      onConfirm={onReset}
      onCancel={onCancel}
    >
      <Row>
        <Ionicons name="alert-circle-outline" size={22} color={colors.danger} />

        <Text
          style={[
            styles.text,
            {
              color: colors.text,
            },
          ]}
        >
          {t("settings.resetCollectionMessage")}
        </Text>
      </Row>

      <Row style={styles.warning}>
        <Ionicons name="warning-outline" size={20} color={colors.danger} />

        <Text
          style={[
            styles.warningText,
            {
              color: colors.danger,
            },
          ]}
        >
          {t("settings.resetCollectionWarning")}
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
