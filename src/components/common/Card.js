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
import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function Card({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const stylesOld = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,

    elevation: 2,
  },
});

const styles2 = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,

    elevation: 3,
  },
});


const styles = StyleSheet.create({

    card: {
        backgroundColor: Colors.white,

        marginHorizontal: Spacing.md,
        marginVertical: 6,

        padding: Spacing.md,

        borderRadius: 14,

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