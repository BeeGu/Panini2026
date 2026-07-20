import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

const ITEMS = [
    {
        key: "missing",
        icon: "alert-circle-outline",
        color: "#EF4444",
        label: "Missing",
    },
    {
        key: "duplicates",
        icon: "copy-outline",
        color: "#F59E0B",
        label: "Duplicates",
    },
    {
        key: "owned",
        icon: "checkmark-circle-outline",
        color: "#22C55E",
        label: "Owned",
    },
    {
        key: "total",
        icon: "albums-outline",
        color: Colors.primary,
        label: "Total",
    },
];

export default function StatisticsQuickStats({ stats }) {

    return (

        <View style={styles.container}>

            {ITEMS.map(item => (

                <View
                    key={item.key}
                    style={styles.card}
                >

                    <Ionicons
                        name={item.icon}
                        size={26}
                        color={item.color}
                    />

                    <Text style={styles.value}>
                        {stats[item.key]}
                    </Text>

                    <Text style={styles.label}>
                        {item.label}
                    </Text>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: Spacing.md,
    },

    card: {
        width: "48%",
        backgroundColor: Colors.white,
        borderRadius: 16,
        alignItems: "center",
        paddingVertical: 18,
        marginBottom: 12,
        elevation: 2,
    },

    value: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "700",
    },

    label: {
        marginTop: 6,
        color: Colors.textSecondary,
    },

});