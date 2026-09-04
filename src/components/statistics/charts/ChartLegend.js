import { StyleSheet, Text, View } from "react-native";

import useTheme from "../../../hooks/useTheme";

import Spacing from "../../../theme/spacing";
import Typography from "../../../theme/typography";

export default function ChartLegend({ items = [] }) {
  const { colors } = useTheme();

  return (
    <View>
      {items.map((item) => (
        <View key={item.label} style={styles.row}>
          <View style={styles.left}>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: item.color,
                },
              ]}
            />

            <Text style={{ color: colors.text }}>{item.label}</Text>
          </View>

          <Text
            style={[
              styles.value,
              {
                color: colors.text,
              },
            ]}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 12,
    height: 12,
    marginRight: Spacing.sm,
    borderRadius: 6,
  },

  value: {
    fontSize: Typography.body,
    fontWeight: "700",
  },
});
