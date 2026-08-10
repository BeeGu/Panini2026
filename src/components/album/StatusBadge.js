import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
// import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatusBadge({
    icon,
    label,
    color,
    // color = Colors.primary,
    // textColor = Colors.white,
}) {
    const { colors } = useTheme();

    const badgeColor = color ?? colors.primary;
    const badgeTextColor = color ?? colors.white;

    return (

        <View
            style={[
                styles.badge,
                { backgroundColor: `${badgeColor}20` },
            ]}
        >

            {icon && (
                <Ionicons
                    name={icon}
                    size={14}
                    // color={color}
                    color={badgeColor}
                    style={styles.icon}
                />
            )}

            <Text
                style={[
                    styles.text,
                    { color },
                    // { color: badgeTextColor },
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