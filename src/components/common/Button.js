// src/components/common/Button.js
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  size = "normal",
  iconOnly = false,
}) {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const variants = {
    primary: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      textColor: colors.textOnPrimary,
      iconColor: colors.textOnPrimary,
    },

    secondary: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
      textColor: colors.text,
      iconColor: colors.icon,
    },

    danger: {
      backgroundColor: colors.danger,
      borderColor: colors.danger,
      textColor: colors.textOnDanger,
      iconColor: colors.textOnDanger,
    },
  };

  const variantStyles = variants[variant] ?? variants.primary;

  const sizeStyle = size === "small" ? styles.small : styles.normal;

  const iconOnlyStyle = iconOnly ? styles.iconOnly : null;

  const iconSize = size === "small" ? 18 : 20;

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        sizeStyle,
        iconOnlyStyle,
        {
          backgroundColor: variantStyles.backgroundColor,
          borderColor: variantStyles.borderColor,
        },
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles.textColor} />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <Ionicons
              name={icon}
              size={iconSize}
              color={variantStyles.iconColor}
            />
          )}

          {!iconOnly && (
            <Text
              style={[
                styles.text,
                {
                  color: variantStyles.textColor,
                },
              ]}
            >
              {title}
            </Text>
          )}

          {icon && iconPosition === "right" && (
            <Ionicons
              name={icon}
              size={iconSize}
              color={variantStyles.iconColor}
            />
          )}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  normal: {
    minHeight: 52,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  small: {
    minHeight: 34,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  iconOnly: {
    width: 38,
    height: 38,
    paddingHorizontal: 0,
    borderRadius: 10,
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: Typography.body,
    fontWeight: "700",
  },
});
