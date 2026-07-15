import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function QuantitySelector({
    value = 0,
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    onIncrement,
    onDecrement,
}) {

    const canDecrease = value > min;
    const canIncrease = value < max;

    return (

        <View style={styles.container}>

            <Pressable
                disabled={!canDecrease}
                onPress={onDecrement}
                style={[
                    styles.button,
                    !canDecrease && styles.disabled,
                ]}
            >
                <Ionicons
                    name="remove"
                    size={20}
                    color={canDecrease ? Colors.primary : "#BDBDBD"}
                />
            </Pressable>

            <Text style={styles.value}>
                {value}
            </Text>

            <Pressable
                disabled={!canIncrease}
                onPress={onIncrement}
                style={[
                    styles.button,
                    !canIncrease && styles.disabled,
                ]}
            >
                <Ionicons
                    name="add"
                    size={20}
                    color={canIncrease ? Colors.primary : "#BDBDBD"}
                />
            </Pressable>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.background,
        borderRadius: 14,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: Colors.border,
    },

    button: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    disabled: {
        opacity: 0.45,
    },

    value: {
        minWidth: 42,
        textAlign: "center",
        fontSize: Typography.body,
        fontWeight: "700",
        color: Colors.text,
    },

});