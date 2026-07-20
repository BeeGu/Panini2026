import { View, Text, StyleSheet } from "react-native";

import TradeStickerCard from "./TradeStickerCard";
import SectionTitle from "../common/SectionTitle";

import Spacing from "../../theme/spacing";

export default function TradeDuplicatesSection({

    stickers,

}) {

    return (

        <View>

            <Text style={styles.title}>
                🎁 Duplicates
            </Text>

            <SectionTitle
                icon="gift"
                title="Duplicates"
            />

            {stickers.map(sticker => (
                <TradeStickerCard
                    key={sticker.id}
                    sticker={sticker}
                    duplicate
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