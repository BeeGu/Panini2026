import { Pressable, StyleSheet, Text } from "react-native";

import useTheme from "../../hooks/useTheme";
// import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function FilterChip({
    title,
    selected,
    onPress,
}) {
    const { colors } = useTheme();

    return (

        <Pressable
            style={({ pressed }) => [
                styles.container,
                {
                    borderColor: colors.border,
                    backgroundColor: colors.surface,
                },

                selected && {
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                },

                pressed && styles.pressed,
            ]}
            onPress={onPress}
        >

            <Text
                style={[
                    styles.text,
                    {
                        color: selected ? "#FFFFFF" : colors.text,
                    },
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
        // borderColor: Colors.border,
        // backgroundColor: Colors.white,
        marginRight: Spacing.sm,
    },

    selected: {
        // backgroundColor: Colors.primary,
        // borderColor: Colors.primary,
    },

    text: {
        // color: Colors.text,
        fontWeight: "600",
        fontSize: 15,
    },
    
    selectedText: {
        // color: Colors.white,
        fontWeight: "600",
        fontSize: 15,
    },

});