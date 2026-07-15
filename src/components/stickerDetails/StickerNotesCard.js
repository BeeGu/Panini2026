import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StickerNotesCard({ sticker }) {

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Notes
            </Text>

            <Text style={styles.notes}>

                {sticker.notes?.trim()
                    ? sticker.notes
                    : "No notes"}

            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
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

    notes: {
        color: Colors.textSecondary,
        lineHeight: 22,
    },

});