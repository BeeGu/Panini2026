import { Pressable, StyleSheet, Text } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function FilterChip({
    title,
    selected,
    onPress,
}) {

    return (

        <Pressable
            // style={[
            //     styles.container,
            //     selected && styles.selected,
            // ]}
            style={({ pressed }) => [
                styles.container,
                selected && styles.selected,
                pressed && { opacity: 0.7 },
            ]}
            onPress={onPress}
        >

            <Text
                style={[
                    styles.text,
                    selected && styles.selectedText,
                ]}
            >
                {title}
            </Text>

        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        minWidth: 90,
    height: 40,
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
        marginRight: Spacing.sm,
    },

  containerY: {
    minWidth: 90,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "red",

    paddingHorizontal: 16,

    marginRight: 8,

    backgroundColor: "white",
},

    selected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },

    text: {
        color: Colors.text,
        fontWeight: "600",
        fontSize: 15,
    },
    
    selectedText: {
        color: Colors.white,
        fontWeight: "600",
        fontSize: 15,
    },

});