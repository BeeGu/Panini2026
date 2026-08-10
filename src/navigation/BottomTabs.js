
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import TradeScreen from "../screens/TradeScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";

import useTheme from "../hooks/useTheme";
import tabIcons from "../constants/tabIcons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

    const { colors } = useTheme();

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                // Active tab
                tabBarActiveTintColor: colors.primary,

                // Inactive tabs
                tabBarInactiveTintColor: colors.textSecondary,

                // Bottom tab bar
                tabBarStyle: {
                    backgroundColor: colors.card,
                    // backgroundColor: colors.surface,
                    borderTopColor: colors.border,
                },

                // Text
                tabBarLabelStyle: {
                    fontWeight: "600",
                },

                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name={tabIcons[route.name]}
                        size={size}
                        color={color}
                    />
                ),

            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Album"
                component={AlbumScreen}
            />

            <Tab.Screen
                name="Trade"
                component={TradeScreen}
                options={{
                    title: "Trade Center",
                }}
            />

            <Tab.Screen
                name="Statistics"
                component={StatisticsScreen}
                options={{
                    title: "Statistics",
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="settings-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

        </Tab.Navigator>

    );

}