import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { initializeAppDatabase } from "./src/database/DatabaseManager";

import ToastProvider from "./src/context/ToastProvider";
import SettingsProvider from "./src/context/SettingsProvider";
import AlbumProvider from "./src/context/AlbumProvider";
import ThemeProvider from "./src/context/ThemeProvider";

import AppSystemBars from "./src/components/common/AppSystemBars";
import AppNavigator from "./src/navigation/AppNavigator";

import { LinearGradient } from "expo-linear-gradient";

global.LinearGradient = LinearGradient;

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
      <SettingsProvider>
        <AlbumProvider>
          <ThemeProvider>
            <ToastProvider>
              <AppSystemBars />
              <AppNavigator />
            </ToastProvider>
          </ThemeProvider>
        </AlbumProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
