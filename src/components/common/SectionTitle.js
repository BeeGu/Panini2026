/*
În loc de:

<Text style={styles.title}>
    🎁 Duplicates
</Text>

vom avea:

<SectionTitle

    icon="gift"

    title="Duplicates"

/>

sau
*/

import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function SectionTitle({
    title,
    icon,
    right,
}) {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {icon && (
                    <Ionicons
                        name={icon}
                        size={22}
                        color={Colors.primary}
                    />
                )}
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            {right}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: Spacing.md,
        marginTop: Spacing.lg,
        marginBottom: Spacing.sm,
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        marginLeft: 8,
        fontSize: 20,
        fontWeight: "700",
        color: Colors.text,
    },

});