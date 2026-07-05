import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../theme/colors";

export default function MenuCard({
  title,
  icon,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        name={icon}
        size={34}
        color={Colors.primary}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    paddingVertical: 24,
    backgroundColor: "#fff",

    borderRadius: 18,

    alignItems: "center",

    elevation: 3,
  },

  pressed: {
    opacity: 0.8,
  },

  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});