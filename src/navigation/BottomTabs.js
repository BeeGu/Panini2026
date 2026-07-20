import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import TradeScreen from "../screens/TradeScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Colors from "../theme/colors";
import tabIcons from "../constants/tabIcons";

const Tab = createBottomTabNavigator();
/*
export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: "#999",
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
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Album"
                component={AlbumScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
*/

export default function BottomTabs() {

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: "#999",
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
            />

        </Tab.Navigator>

    );

}
