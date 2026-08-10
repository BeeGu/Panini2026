/*
În loc de

<View style={styles.card}>

    ...

</View>

vom scrie pur și simplu

<Card>

    ...

</Card>
*/

import { View, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";

export default function Card({ children, style }) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.md,
    marginVertical: 6,

    padding: Spacing.md,

    borderRadius: 14,

    borderWidth: 1,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
