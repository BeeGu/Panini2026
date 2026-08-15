import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

export default function Badge({ icon, text, color, backgroundColor }) {
  const { colors } = useTheme();

  const badgeColor = color ?? colors.primary;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? `${badgeColor}20`,
        },
      ]}
    >
      {icon && <Ionicons name={icon} size={14} color={badgeColor} />}

      {text && (
        <Text
          style={[
            styles.text,
            {
              color: badgeColor,
            },
          ]}
        >
          {text}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    minWidth: 34,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  text: {
    fontSize: 12,
    fontWeight: "700",
  },
});
