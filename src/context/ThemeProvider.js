import { useEffect, useMemo, useState } from "react";

import { useColorScheme } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import ThemeContext from "../context/ThemeContext";

import light from "../theme/light";
import dark from "../theme/dark";

const APPEARANCE_STORAGE_KEY = "@panini_tracker/appearance";

export default function ThemeProvider({ children }) {
  const systemTheme = useColorScheme();

  const [appearance, setAppearanceState] = useState("system");

  const [loaded, setLoaded] = useState(false);

  // Load saved appearance
  useEffect(() => {
    async function loadAppearance() {
      try {
        const savedAppearance = await AsyncStorage.getItem(
          APPEARANCE_STORAGE_KEY,
        );

        if (
          savedAppearance === "light" ||
          savedAppearance === "dark" ||
          savedAppearance === "system"
        ) {
          setAppearanceState(savedAppearance);
        }
      } catch (error) {
        console.warn("Failed to load appearance:", error);
      } finally {
        setLoaded(true);
      }
    }

    loadAppearance();
  }, []);

  // Change + persist appearance
  async function setAppearance(value) {
    if (value !== "light" && value !== "dark" && value !== "system") {
      return;
    }

    setAppearanceState(value);

    try {
      await AsyncStorage.setItem(APPEARANCE_STORAGE_KEY, value);
    } catch (error) {
      console.warn("Failed to save appearance:", error);
    }
  }

  const theme = useMemo(() => {
    if (appearance === "light") return "light";

    if (appearance === "dark") return "dark";

    return systemTheme === "dark" ? "dark" : "light";
  }, [appearance, systemTheme]);

  const colors = useMemo(() => {
    return theme === "dark" ? dark : light;
  }, [theme]);

  /*
   * Don't render the application before
   * the saved appearance has been loaded.
   *
   * Otherwise we could briefly show:
   *
   * System/Light -> Dark
   *
   * during application startup.
   */
  if (!loaded) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        appearance,
        setAppearance,

        theme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
