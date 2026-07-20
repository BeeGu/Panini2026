import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

export default function Toast({

    visible,
    message,
    type,

}) {

    if (!visible)
        return null;

    const icon =
        type === "error"
            ? "close-circle"
            : "checkmark-circle";

    const color =
        type === "error"
            ? Colors.danger
            : Colors.success;

    return (

        <View style={styles.container}>

            <Ionicons
                name={icon}
                size={20}
                color={color}
            />

            <Text style={styles.text}>
                {message}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        position: "absolute",

        left: 20,
        right: 20,
        bottom: 40,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#222",

        paddingHorizontal: 16,
        paddingVertical: 14,

        borderRadius: 12,

        elevation: 6,

    },

    text: {

        color: "#fff",

        marginLeft: 10,

        flex: 1,

    },

});