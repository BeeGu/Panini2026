import { useEffect, useRef } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

export default function Toast({
  visible,
  message,
  type = "success",
  index = 0,
}) {
  const { colors } = useTheme();

  const translateY = useRef(new Animated.Value(-20)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  let icon;
  let color;

  switch (type) {
    case "error":
      icon = "close-circle";
      color = colors.danger;
      break;

    case "warning":
      icon = "warning";
      color = colors.warning;
      break;

    case "info":
      icon = "information-circle";
      color = colors.info;
      break;

    default:
      icon = "checkmark-circle";
      color = colors.success;
      break;
  }

  useEffect(() => {
    if (!visible) return;

    translateY.setValue(-20);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          opacity,
          transform: [{ translateY }],
          bottom: 40 + index * 72,
        },
      ]}
    >
      <Ionicons name={icon} size={22} color={color} />

      <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
        ]}
      >
        {message}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 20,
    right: 20,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,
    paddingVertical: 14,

    borderWidth: 1,
    borderRadius: 12,

    elevation: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  text: {
    flex: 1,
    marginLeft: 10,
  },
});
