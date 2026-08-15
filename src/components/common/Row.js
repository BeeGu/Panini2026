// ⭐️ Refactored
import { View, StyleSheet } from "react-native";

export default function Row({
  children,
  style,
  justify = "space-between",
  align = "center",
  gap = 0,
}) {
  return (
    <View
      style={[
        styles.row,
        {
          justifyContent: justify,
          alignItems: align,
          gap,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
