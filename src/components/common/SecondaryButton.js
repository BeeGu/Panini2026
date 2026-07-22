import { Pressable, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";

export default function SecondaryButton({
    title,
    onPress,
    style,
}) {

    return (

        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                style,
                pressed && styles.pressed,
            ]}
        >

            <Text style={styles.text}>
                {title}
            </Text>

        </Pressable>

    );

}

const styles = StyleSheet.create({

    button: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
    },

    pressed: {
        opacity: 0.8,
    },

    text: {
        color: Colors.text,
        fontWeight: "600",
        fontSize: 16,
    },

});