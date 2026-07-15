import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

import { formatStickerNumber } from "../../utils/formatters";


import { Image } from "react-native";
import ImageService from "../../services/ImageService";

export default function StickerHero({
    sticker,
}) {
    const image = ImageService.getStickerImage(sticker);
    console.log ("🛠 StickerHero", {sticker})
  
    return (

        <View style={styles.container}>

          {/* <Flag
                iso2={sticker.team_iso2}
                size={90}
            /> */}

            {
                image ? (
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                ) : (
                    <Flag
                        iso2={sticker.team_iso2}
                        size={90}
                    />
                )
            }

            <Text style={styles.number}>
                {formatStickerNumber(sticker.number)}
            </Text>

            <Text style={styles.name}>
                {sticker.name}
            </Text>

            <Text style={styles.team}>
                {sticker.team}
            </Text>

          {/* {sticker.owned && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        ✓ Collected
                    </Text>
                </View>
            )} */}
            {!!sticker.owned && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        ✓ Collected
                    </Text>
                </View>
            )}
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingVertical: 24,
        marginBottom: Spacing.md,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    number: {
        marginTop: 16,
        fontSize: Typography.h2,
        fontWeight: "700",
    },

    name: {
        marginTop: 8,
        fontSize: Typography.h1,
        fontWeight: "700",
        textAlign: "center",
    },

    team: {
        marginTop: 4,
        color: Colors.textSecondary,
        fontSize: Typography.body,
    },

    badge: {
        marginTop: 16,
        backgroundColor: Colors.success,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    badgeText: {
        color: Colors.white,
        fontWeight: "700",
    },

    image: {
        width: 150,
        height: 210,
        marginBottom: 16,
    },

});