import { Pressable, StyleSheet, Text } from "react-native";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function FilterChip({ title, selected, onPress }) {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          borderColor: colors.border,
          backgroundColor: colors.surface,
        },

        selected && {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },

        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected ? colors.textOnPrimary : colors.text,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 90,
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 16,

    borderRadius: 20,
    borderWidth: 1,

    marginRight: Spacing.sm,
  },

  pressed: {
    opacity: 0.75,
  },

  text: {
    fontWeight: "600",
    fontSize: Typography.body,
  },
});
