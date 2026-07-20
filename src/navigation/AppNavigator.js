import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import StickerDetailsScreen from "../screens/StickerDetailsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center",
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

            </Stack.Navigator>

        </NavigationContainer>

    );

}


