/*
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Panini Tracker 2026</Text>
    </View>
  );
}
*/

import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Panini Tracker 2026</Text>

      <Text style={styles.subtitle}>
        Album FIFA World Cup 2026
      </Text>

      <Text style={styles.progress}>
        0 / 980 Stickere
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0057B8",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },

  progress: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
});