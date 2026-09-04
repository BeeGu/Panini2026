import { View, Text, TextInput, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import FieldContainer from "./FieldContainer";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function FormField({
  label,
  value,
  onChange,
  placeholder = "",
  keyboardType = "default",
  multiline = false,
  editable = true,
}) {
  const { colors } = useTheme();

  return (
    <FieldContainer label={label} disabled={!editable}>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multiline,
          {
            color: colors.text,
          },
        ]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={editable}
        textAlignVertical="top"
      />
    </FieldContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: Typography.body,
  },

  multiline: {
    minHeight: 120,
  },
});
