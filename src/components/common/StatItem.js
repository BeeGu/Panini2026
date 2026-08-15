// ⭐️ Refactored
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Row from "./Row";

import useTheme from "../../hooks/useTheme";

export default function StatItem({ icon, iconColor, value, label }) {
  const { colors } = useTheme();

  return (
    <Row gap={8} justify="flex-start">
      <Ionicons name={icon} size={20} color={colors.primary} />

      <Text
        style={[
          styles.value,
          {
            color: colors.text,
          },
        ]}
      >
        {value}
      </Text>

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
    </Row>
  );
}

const styles = StyleSheet.create({
  value: {
    fontWeight: "700",
    fontSize: 18,
  },

  label: {},
});
