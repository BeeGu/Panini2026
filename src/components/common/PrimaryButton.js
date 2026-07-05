import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  pressed: {
    opacity: 0.8,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});