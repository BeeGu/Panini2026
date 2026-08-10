import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../../hooks/useTheme";

export default function MenuCard({ title, icon, color, onPress }) {
  const { colors } = useTheme();
  const iconColor = color ?? colors.primary;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name={icon} size={34} color={iconColor} />

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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    paddingVertical: 24,
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
