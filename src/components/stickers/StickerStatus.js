// ⭐️ Refactored
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

export default function StickerStatus({ owned, onPress }) {
  const { colors } = useTheme();

  return (
    <Pressable onPress={onPress} hitSlop={10} style={styles.container}>
      <Ionicons
        name={owned ? "checkmark-circle" : "ellipse-outline"}
        size={30}
        color={owned ? colors.success : colors.textMuted}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 12,
  },
});
