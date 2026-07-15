import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

export default function StickerStatus({
    owned,
    onPress,
}) {

    return (

        <Pressable
            onPress={onPress}
            hitSlop={10}
            style={styles.container}
        >

            <Ionicons
                name={owned ? "checkmark-circle" : "ellipse-outline"}
                size={30}
                color={owned ? Colors.success : "#9CA3AF"}
            />

        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 12,
    },

});