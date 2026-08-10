import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

export default function Divider() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: colors.border,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    marginVertical: 12,
  },
});
