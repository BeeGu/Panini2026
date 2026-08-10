
import { View, Text, StyleSheet, Image } from "react-native";

import Flag from "../common/Flag";

import useTheme from "../../hooks/useTheme";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

import { formatStickerNumber } from "../../utils/formatters";

import ImageService from "../../services/ImageService";

export default function StickerHero({
    sticker,
}) {

    const { colors } = useTheme();

    const image = ImageService.getStickerImage(sticker);

    return (

        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.card,
                },
            ]}
        >
            {image ? (
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
            )}

            <Text
                style={[
                    styles.number,
                    {
                        color: colors.primary,
                    },
                ]}
            >
                {formatStickerNumber(sticker.number)}
            </Text>


            <Text
                style={[
                    styles.name,
                    {
                        color: colors.text,
                    },
                ]}
            >
                {sticker.name}
            </Text>


            <Text
                style={[
                    styles.team,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {sticker.team}
            </Text>


            {!!sticker.owned && (
                <View
                    style={[
                        styles.badge,
                        {
                            backgroundColor: colors.success,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.badgeText,
                            {
                                color: colors.surface,
                            },
                        ]}
                    >
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
        fontSize: Typography.body,
    },

    badge: {
        marginTop: 16,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    badgeText: {
        fontWeight: "700",
    },

    image: {
        width: 150,
        height: 210,
        marginBottom: 16,
    },

});