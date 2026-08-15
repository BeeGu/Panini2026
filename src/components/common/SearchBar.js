import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Caută...",
}) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
      />

      {value.length > 0 && (
        <Ionicons
          name="close-circle"
          size={22}
          color={colors.textSecondary}
          onPress={() => onChangeText("")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
  },

  input: {
    flex: 1,
    padding: 12,
    fontSize: Typography.body,
  },
});
