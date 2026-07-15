import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import { formatStickerNumber } from "../../utils/formatters";
import Flag from "../common/Flag";

export default function StickerInfo({ sticker }) {

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.teamRow}>

                    <Flag
                        iso2={sticker.team_iso2}
                    />

                    <Text style={styles.team}>
                        {sticker.team}
                    </Text>

                </View>

                {sticker.duplicates > 0 && (

                    <View style={styles.badge}>

                        <Text style={styles.badgeText}>
                            +{sticker.duplicates}
                        </Text>

                    </View>

                )}

            </View>

            <Text style={styles.name}>
                {formatStickerNumber(sticker.number)} {sticker.name}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    teamRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    team: {
        fontSize: Typography.body,
        color: Colors.textSecondary,
        fontWeight: "600",
    },

    name: {
        marginTop: 6,
        fontSize: 18,
        color: Colors.text,
        fontWeight: "700",
    },

    badge: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },

    badgeText: {
        color: Colors.white,
        fontWeight: "700",
    },

});