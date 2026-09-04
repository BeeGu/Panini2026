import { useTranslation } from "react-i18next";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "./Card";
import Button from "./Button";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function ConfirmDialog({
  visible,

  title,
  children,

  icon,
  iconColor,

  confirmText,
  confirmVariant = "primary",

  cancelText,
  cancelVariant = "secondary",

  showCloseButton = false,

  onConfirm,
  onCancel,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const resolvedConfirmText = confirmText ?? t("common.confirm");
  const resolvedCancelText = cancelText ?? t("common.cancel");

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={[
          styles.overlay,
          {
            backgroundColor: colors.backdrop ?? "rgba(0,0,0,0.45)",
          },
        ]}
      >
        <Card style={styles.dialog}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              {icon && (
                <Ionicons
                  name={icon}
                  size={28}
                  color={iconColor ?? colors.primary}
                />
              )}

              <Text
                style={[
                  styles.title,
                  {
                    color: colors.text,
                  },
                ]}
              >
                {title}
              </Text>
            </View>

            {showCloseButton && (
              <Button
                icon="close"
                iconOnly
                size="small"
                variant="secondary"
                onPress={onCancel}
              />
            )}
          </View>

          <View style={styles.content}>{children}</View>

          <View style={styles.buttons}>
            <Button
              title={resolvedCancelText}
              variant={cancelVariant}
              onPress={onCancel}
            />

            <Button
              title={resolvedConfirmText}
              variant={confirmVariant}
              onPress={onConfirm}
            />
          </View>
        </Card>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  dialog: {
    padding: Spacing.lg,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
    marginRight: Spacing.sm,
  },

  title: {
    flex: 1,
    fontSize: Typography.h2,
    fontWeight: "700",
  },

  content: {
    marginBottom: Spacing.xl,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: Spacing.sm,
  },
});
