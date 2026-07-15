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

import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { initializeAppDatabase } from "./src/database/DatabaseManager";
import AlbumProvider from "./src/context/AlbumProvider";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function init() {
            await initializeAppDatabase();
            setReady(true);
        }

        init();
    }, []);

    if (!ready) {
        return null;
    }
  
    return (
        <SafeAreaProvider>
            <AlbumProvider>
                <AppNavigator />
            </AlbumProvider>
        </SafeAreaProvider>
    );
}