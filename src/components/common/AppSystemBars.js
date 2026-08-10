
import { useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationBar } from "expo-navigation-bar";

import useTheme from "../../hooks/useTheme";

export default function AppSystemBars() {

    const { theme, colors } = useTheme();

    useEffect(() => {

        if (Platform.OS !== "android")
            return;

        NavigationBar.setStyle(
            theme === "dark"
                ? "light"
                : "dark"
        );

    }, [theme]);

    return (

        <StatusBar
            style={
                theme === "dark"
                    ? "light"
                    : "dark"
            }
        />

    );

}

/*
import { useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationBar } from "expo-navigation-bar";

import useTheme from "../../hooks/useTheme";

export default function AppSystemBars() {

    const { theme, colors } = useTheme();

    useEffect(() => {

        if (Platform.OS !== "android")
            return;

        NavigationBar.setBackgroundColorAsync(
            colors.background
        );

        NavigationBar.setButtonStyleAsync(
            theme === "dark"
                ? "light"
                : "dark"
        );

    }, [
        theme,
        colors.background,
    ]);

    return (
        <StatusBar
            style={
                theme === "dark"
                    ? "light"
                    : "dark"
            }
            backgroundColor={colors.background}
        />
    );
}
*/