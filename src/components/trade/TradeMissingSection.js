import { View, Text, StyleSheet } from "react-native";

import TradeStickerCard from "./TradeStickerCard";

import Spacing from "../../theme/spacing";

export default function TradeMissingSection({

    stickers,

}) {

    return (

        <View>

            <Text style={styles.title}>
                ❗ Missing
            </Text>

            {stickers.map(sticker => (

                <TradeStickerCard

                    key={sticker.id}

                    sticker={sticker}

                />

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    title: {
        fontWeight: "700",
        fontSize: 20,
        marginHorizontal: Spacing.md,
        marginTop: Spacing.lg,
        marginBottom: 8,
    },

});