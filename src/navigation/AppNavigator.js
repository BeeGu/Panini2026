import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import useTheme from "../hooks/useTheme";

import BottomTabs from "./BottomTabs";
import SearchScreen from "../screens/SearchScreen";
import StickerDetailsScreen from "../screens/StickerDetailsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import EditStickerScreen from "../screens/EditStickerScreen";
import BackupScreen from "../screens/BackupScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
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
            title: "Search",
          }}
        />

        <Stack.Screen
          name="StickerDetails"
          component={StickerDetailsScreen}
          options={{
            title: "Sticker",
          }}
        />

        {/* <Stack.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{
                title: "Statistics",
            }}
        /> */}

        <Stack.Screen
          name="EditSticker"
          component={EditStickerScreen}
          options={{
            title: "Edit Sticker",
          }}
        />

        <Stack.Screen
          name="Backup"
          component={BackupScreen}
          options={{
            title: "Backups",
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
