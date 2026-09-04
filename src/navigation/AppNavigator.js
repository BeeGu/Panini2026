import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTranslation } from "react-i18next";

import useTheme from "../hooks/useTheme";

import BottomTabs from "./BottomTabs";
import SearchScreen from "../screens/SearchScreen";
import StickerDetailsScreen from "../screens/StickerDetailsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import EditStickerScreen from "../screens/EditStickerScreen";
import BackupScreen from "../screens/BackupScreen";
import DatabaseInspectorScreen from "../screens/DatabaseInspectorScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerBackTitleVisible: false,
          // headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            color: colors.text,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: t("navigation.search"),
          }}
        />

        <Stack.Screen
          name="StickerDetails"
          component={StickerDetailsScreen}
          options={{
            title: t("navigation.sticker"),
          }}
        />

        <Stack.Screen
          name="EditSticker"
          component={EditStickerScreen}
          options={{
            title: t("navigation.editSticker"),
          }}
        />

        <Stack.Screen
          name="Backup"
          component={BackupScreen}
          options={{
            title: t("navigation.backups"),
            // headerShown: false,
          }}
        />

        <Stack.Screen
          name="DatabaseInspector"
          component={DatabaseInspectorScreen}
          options={{
            title: t("navigation.databaseInspector"),
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
