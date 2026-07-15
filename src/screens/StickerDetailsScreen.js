import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAlbum from "../hooks/useAlbum";

import StickerHeader from "../components/stickerDetails/StickerHeader";
import StickerHero from "../components/stickerDetails/StickerHero";
import StickerCollectionCard from "../components/stickerDetails/StickerCollectionCard";
import StickerInfoCard from "../components/stickerDetails/StickerInfoCard";
import StickerNotesCard from "../components/stickerDetails/StickerNotesCard";

import Colors from "../theme/colors";
import Spacing from "../theme/spacing";

export default function StickerDetailsScreen({
    navigation,
    route,
}) {

    const { getSticker } = useAlbum();

    const sticker = getSticker(
        route.params.stickerId
    );

    useLayoutEffect(() => {

        if (!sticker) return;

        navigation.setOptions({
            title: sticker.name,
        });

    }, [navigation, sticker]);

    if (!sticker) {
        return null;
    }

    return (

        <SafeAreaView style={styles.container}>

          {/* <StickerHeader sticker={sticker} /> */}
            <StickerHero sticker={sticker}/>

            <ScrollView>

                <StickerCollectionCard sticker={sticker} />

                <StickerInfoCard sticker={sticker} />

                <StickerNotesCard sticker={sticker} />

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

});