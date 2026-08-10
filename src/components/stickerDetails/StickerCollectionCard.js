
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import useAlbum from "../../hooks/useAlbum";

import Spacing from "../../theme/spacing";
import QuantitySelector from "../common/QuantitySelector";


export default function StickerCollectionCard({
    sticker,
}) {

    const { colors } = useTheme();

    const {
        addDuplicate,
        removeDuplicate,
    } = useAlbum();

    if (!sticker) {
          return null;
    }

    return (

        <View
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}
        >

            <Text
                style={[
                    styles.title,
                    {
                        color: colors.text,
                    },
                ]}
            >
                Collection
            </Text>


            <View style={styles.row}>

                <Text
                    style={[
                        styles.label,
                        {
                            color: colors.textSecondary,
                        },
                    ]}
                >
                    Owned
                </Text>


                <Ionicons
                    name={
                        sticker.owned
                            ? "checkmark-circle"
                            : "ellipse-outline"
                    }
                    size={24}
                    color={
                        sticker.owned
                            ? colors.success
                            : colors.textSecondary
                    }
                />

            </View>


            <View style={styles.row}>

                <Text
                    style={[
                        styles.label,
                        {
                            color: colors.textSecondary,
                        },
                    ]}
                >
                    Duplicates
                </Text>


                <QuantitySelector
                    value={sticker.duplicates}
                    // min={0}
                    disabled={!sticker.owned}
                    onIncrement={() =>
                        addDuplicate(sticker.id)
                    }
                    onDecrement={() =>
                        removeDuplicate(sticker.id)
                    }
                />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    card: {
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 14,
        borderWidth: 1,
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
        alignItems: "center",
        marginVertical: 6,
    },

    label: {
        fontSize: 16,
    },

});