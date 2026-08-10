import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View, } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useAlbum from "../hooks/useAlbum";
import useDeveloperMode from "../hooks/useDeveloperMode";

import StickerHero from "../components/stickerDetails/StickerHero";
import StickerCollectionCard from "../components/stickerDetails/StickerCollectionCard";
import StickerInfoCard from "../components/stickerDetails/StickerInfoCard";
import StickerNotesCard from "../components/stickerDetails/StickerNotesCard";

import Button from "../components/common/Button";

import Typography from "../theme/typography";
import Spacing from "../theme/spacing";


export default function StickerDetailsScreen({
    navigation,
    route,
}) {

    const { colors } = useTheme();
    const { getSticker } = useAlbum();
    const { enabled } = useDeveloperMode();

    const sticker = getSticker(
        route.params.stickerId
    );

    useLayoutEffect(() => {

        if (!sticker)
            return;

        navigation.setOptions({
            title: sticker.name,
        });

    }, [navigation, sticker]);

    if (!sticker) {
        return null;
    }

    function handleEdit() {

        navigation.navigate(
            "EditSticker",
            {
                stickerId: sticker.id,
            }
        );

    }

    function handleCancel() {
        navigation.goBack();
    }

    return (

        <SafeAreaView
            edges={["bottom"]}
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                },
            ]}
        >

            <ScrollView
                contentContainerStyle={
                    styles.scrollContent
                }
            >

                <StickerHero
                    sticker={sticker}
                />

                <StickerCollectionCard
                    sticker={sticker}
                />

                <StickerInfoCard
                    sticker={sticker}
                />

                <StickerNotesCard
                    sticker={sticker}
                />

                {enabled && (

                    <View style={styles.developerActions}>

                        <View style={styles.actionButton}>
                            <Button
                                title="Edit Sticker"
                                icon="create-outline"
                                variant="primary"
                                onPress={handleEdit}
                            />
                        </View>

                        <View style={styles.actionButton}>
                            <Button
                                title="Cancel"
                                icon="close-outline"
                                variant="secondary"
                                onPress={handleCancel}
                            />
                        </View>

                    </View>

                )}

            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    scrollContent: {
        paddingBottom: 24,
    },

    developerActions: {
        flexDirection: "row",
        gap: 10,
        marginHorizontal: 16,
        marginTop: 8,
    },
    
    actionButton: {
        flex: 1,
    },
  
});