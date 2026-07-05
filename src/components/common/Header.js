import { View, Text, StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
});