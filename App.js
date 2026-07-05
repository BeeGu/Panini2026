/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import { useEffect } from "react";
import { initializeDatabase } from "./src/database/schema";
import { seedDatabase } from "./src/database/seed";
import AppNavigator from "./src/navigation/AppNavigator";

/*
export default function App() {
  return <AppNavigator />;
}
*/

export default function App() {

  useEffect(() => {
    initializeDatabase();
    seedDatabase();
  }, []);

  return <AppNavigator />;
}
