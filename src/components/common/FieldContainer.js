import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function FieldContainer({ label, children, disabled = false }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {label}
        </Text>
      )}

      <View
        style={[
          styles.field,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
          disabled && styles.disabled,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: Typography.caption,
    marginBottom: 6,
    fontWeight: "600",
  },

  field: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
  },

  disabled: {
    opacity: 0.6,
  },
});
