import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

function Row({ label, value }) {

    return (

        <View style={styles.row}>

            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={styles.value}>
                {value ?? "-"}
            </Text>

        </View>

    );

}

export default function StickerInfoCard({ sticker }) {

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Sticker Information
            </Text>

            <Row
                label="Code"
                value={sticker.code}
            />

            <Row
                label="Section"
                value={sticker.section}
            />

            <Row
                label="Team"
                value={sticker.team}
            />

            <Row
                label="Team Code"
                value={sticker.team_code}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 14,
        backgroundColor: Colors.white,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: Spacing.md,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
    },

    label: {
        color: Colors.textSecondary,
    },

    value: {
        fontWeight: "600",
    },

});