import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function SettingsActionItem({
    icon,
    title,
    subtitle,
    color = Colors.primary,
    onPress,
}) {

    return (

        <Pressable
            style={styles.container}
            onPress={onPress}
        >

            <View style={styles.left}>

                <Ionicons
                    name={icon}
                    size={22}
                    color={color}
                />

                <View style={styles.textContainer}>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    {subtitle && (

                        <Text style={styles.subtitle}>
                            {subtitle}
                        </Text>

                    )}

                </View>

            </View>

            <Ionicons
                name="chevron-forward"
                size={18}
                color={Colors.textSecondary}
            />

        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Spacing.md,
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    textContainer: {
        marginLeft: 12,
        flex: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
    },

    subtitle: {
        marginTop: 2,
        color: Colors.textSecondary,
        fontSize: 13,
    },

});