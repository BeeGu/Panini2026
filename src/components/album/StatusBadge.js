import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatusBadge({
    icon,
    label,
    color = Colors.primary,
    // textColor = Colors.white,
}) {

    return (

        <View
            style={[
                styles.badge,
                { backgroundColor: `${color}20` },
            ]}
        >

            {icon && (

                <Ionicons
                    name={icon}
                    size={14}
                    color={color}
                    style={styles.icon}
                />

            )}

            <Text
                style={[
                    styles.text,
                    { color },
                    // { color: textColor },
                ]}
            >
                {label}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    badge: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    icon: {
        marginRight: 5,
    },

    text: {
        fontSize: 12,
        fontWeight: "700",
    },

});