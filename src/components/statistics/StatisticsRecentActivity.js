import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatisticsRecentActivity({

    activity,

}) {

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Recent Activity
            </Text>

            {activity.map(item => (

                <View
                    key={item.id}
                    style={styles.row}
                >

                    <Ionicons
                        name="time-outline"
                        size={20}
                        color={Colors.primary}
                    />

                    <View style={styles.info}>

                        <Text>
                            {item.name}
                        </Text>

                        <Text style={styles.date}>
                            {item.updated_at}
                        </Text>

                    </View>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        backgroundColor: Colors.white,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    info: {
        marginLeft: 12,
    },

    date: {
        color: Colors.textSecondary,
        fontSize: 12,
    },

});