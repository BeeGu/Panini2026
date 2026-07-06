import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

    return (

        <Tab.Navigator
          screenOptions={{
              headerShown: false,
          }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Album"
                component={AlbumScreen}
            />

        </Tab.Navigator>

    );

}