import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function QuantitySelector({
  value = 0,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  onIncrement,
  onDecrement,
  disabled = false,
}) {
  const { colors } = useTheme();

  const canDecrease = !disabled && value > min;
  const canIncrease = !disabled && value < max;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
        disabled && styles.disabledContainer,
      ]}
    >
      <Pressable
        disabled={!canDecrease}
        onPress={onDecrement}
        style={[styles.button, !canDecrease && styles.disabled]}
      >
        <Ionicons
          name="remove"
          size={20}
          color={canDecrease ? colors.primary : colors.textMuted}
        />
      </Pressable>

      <Text
        style={[
          styles.value,
          {
            color: colors.text,
          },

          disabled && {
            color: colors.textMuted,
          },
        ]}
      >
        {value}
      </Text>

      <Pressable
        disabled={!canIncrease}
        onPress={onIncrement}
        style={[styles.button, !canIncrease && styles.disabled]}
      >
        <Ionicons
          name="add"
          size={20}
          color={canIncrease ? colors.primary : colors.textMuted}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
  },

  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  disabled: {
    opacity: 0.45,
  },

  disabledContainer: {
    opacity: 0.65,
  },

  value: {
    minWidth: 42,
    textAlign: "center",
    fontSize: Typography.body,
    fontWeight: "700",
  },
});
