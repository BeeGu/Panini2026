
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";

export default function StickerNotesCard({
    sticker,
}) {

    const { colors } = useTheme();

    const hasNotes =
        sticker.notes?.trim();

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
                Notes
            </Text>


            <Text
                style={[
                    styles.notes,
                    {
                        color: hasNotes
                            ? colors.text
                            : colors.textMuted,
                    },
                ]}
            >
                {hasNotes ? sticker.notes : "No notes"}
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
        borderWidth: 1,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: Spacing.md,
    },

    notes: {
        lineHeight: 22,
    },

});