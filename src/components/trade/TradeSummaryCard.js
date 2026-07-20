import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Column from "../common/Column";
import StatItem from "../common/StatItem";
import Divider from "../common/Divider";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function TradeSummaryCard({ summary }) {

    return (

        // <View style={styles.card}>

        //     <View style={styles.row}>

        //         <Ionicons
        //             name="gift"
        //             size={22}
        //             color="#F59E0B"
        //         />

        //         <Text style={styles.value}>
        //             {summary.duplicates}
        //         </Text>

        //         <Text style={styles.label}>
        //             Duplicates
        //         </Text>

        //     </View>

        //     <View style={styles.row}>

        //         <Ionicons
        //             name="alert-circle"
        //             size={22}
        //             color="#EF4444"
        //         />

        //         <Text style={styles.value}>
        //             {summary.missing}
        //         </Text>

        //         <Text style={styles.label}>
        //             Missing
        //         </Text>

        //     </View>

        // </View>

        <Card>
            <Column gap={12}>

                <StatItem
                    icon="gift"
                    value={summary.duplicates}
                    label="Duplicates"
                />

                <Divider />

                <StatItem
                    icon="alert-circle"
                    value={summary.missing}
                    label="Missing"
                />

            </Column>
        </Card>

    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: Colors.white,
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        elevation: 2,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },

    value: {
        fontWeight: "700",
        fontSize: 20,
        marginLeft: 10,
    },

    label: {
        marginLeft: 8,
        color: Colors.textSecondary,
    },

});