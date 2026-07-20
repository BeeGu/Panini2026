import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

export default function Badge({
    icon,
    text,
    color = Colors.primary,
    backgroundColor,
}) {

    return (

        <View
            style={[
                styles.container,
                {
                    backgroundColor:
                        backgroundColor ?? `${color}20`,
                },
            ]}
        >

            {icon && (

                <Ionicons
                    name={icon}
                    size={14}
                    color={color}
                />

            )}

            {text && (

                <Text
                    style={[
                        styles.text,
                        { color },
                    ]}
                >
                    {text}
                </Text>

            )}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        minWidth: 34,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
    },

    text: {
        fontSize: 12,
        fontWeight: "700",
    },

});