import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function SettingsInfoItem({
    icon,
    title,
    value,
}) {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Ionicons
                    name={icon}
                    size={22}
                    color={Colors.primary}
                />

                <Text style={styles.title}>
                    {title}
                </Text>
            </View>

            <Text style={styles.value}>
                {value}
            </Text>

        </View>
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
    },

    title: {
        marginLeft: 12,
        fontSize: 16,
    },

    value: {
        color: Colors.textSecondary,
    },

});