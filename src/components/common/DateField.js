import { useState } from "react";
import { Pressable, Text, View, Platform, StyleSheet } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import FieldContainer from "./FieldContainer";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function DateField({
  label,
  value,
  onChange,
  disabled = false,
}) {
  const { colors } = useTheme();
  const [show, setShow] = useState(false);

  const date = value ? new Date(value) : new Date();

  function handleValueChange(selectedDate) {
    if (!selectedDate) return;

    onChange?.(selectedDate);

    // Android picker is closed after selecting a value.
    if (Platform.OS === "android") {
      setShow(false);
    }
  }

  function handleDismiss() {
    setShow(false);
  }

  return (
    <FieldContainer label={label} disabled={disabled}>
      <Pressable
        style={styles.button}
        onPress={() => setShow(true)}
        disabled={disabled}
      >
        <Text
          style={[
            styles.text,
            {
              color: colors.text,
            },
          ]}
        >
          {date.toLocaleDateString()}
        </Text>

        <Ionicons
          name="calendar-outline"
          size={20}
          color={colors.textSecondary}
        />
      </Pressable>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onValueChange={handleValueChange}
          onDismiss={handleDismiss}
        />
      )}
    </FieldContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: Typography.body,
  },
});
