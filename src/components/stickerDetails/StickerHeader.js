import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";
import { formatStickerNumber } from "../../utils/formatters";

export default function StickerHeader({ sticker }) {

    if (!sticker) {
        return null;
    }

    return (

        <View style={styles.container}>

            <Text style={styles.number}>
                {formatStickerNumber(sticker.number)}
            </Text>

            <Text style={styles.name}>
                {sticker.name}
            </Text>

            <Text style={styles.team}>
                {sticker.team}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.primary,
        padding: Spacing.xl,
        alignItems: "center",
    },

    number: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.white,
    },

    name: {
        marginTop: Spacing.sm,
        fontSize: 28,
        fontWeight: "700",
        color: Colors.white,
        textAlign: "center",
    },

    team: {
        marginTop: 6,
        fontSize: Typography.body,
        color: "#E6F2FF",
    },

});