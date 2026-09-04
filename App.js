import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { initializeAppDatabase } from "./src/database/DatabaseManager";
import { initializeI18n } from "./src/i18n";

import SettingsProvider from "./src/context/SettingsProvider";
import LanguageProvider from "./src/context/LanguageProvider";
import AlbumProvider from "./src/context/AlbumProvider";
import ThemeProvider from "./src/context/ThemeProvider";
import ToastProvider from "./src/context/ToastProvider";

import AppSystemBars from "./src/components/common/AppSystemBars";
import AppNavigator from "./src/navigation/AppNavigator";

import { LinearGradient } from "expo-linear-gradient";

global.LinearGradient = LinearGradient;

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await initializeAppDatabase();
        await initializeI18n();

        setReady(true);
      } catch (error) {
        console.error("Failed to initialize app:", error);
      }
    }

    init();
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <LanguageProvider>
          <AlbumProvider>
            <ThemeProvider>
              <ToastProvider>
                <AppSystemBars />
                <AppNavigator />
              </ToastProvider>
            </ThemeProvider>
          </AlbumProvider>
        </LanguageProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
