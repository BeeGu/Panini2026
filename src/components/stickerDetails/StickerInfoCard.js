
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";


function Row({
    label,
    value,
}) {

    const { colors } = useTheme();

    return (

        <View style={styles.row}>

            <Text
                style={[
                    styles.label,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {label}
            </Text>

            <Text
                style={[
                    styles.value,
                    {
                        color: colors.text,
                    },
                ]}
            >
                {value ?? "-"}
            </Text>

        </View>

    );

}


export default function StickerInfoCard({
    sticker,
}) {

    const { colors } = useTheme();

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
                Sticker Information
            </Text>


            <Row
                label="Code"
                value={sticker.code}
            />

            <Row
                label="Section"
                value={sticker.section}
            />

            <Row
                label="Team"
                value={sticker.team}
            />

            <Row
                label="Team Code"
                value={sticker.team_code}
            />

        </View>

    );

}


const styles = StyleSheet.create({

    card: {
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.md,
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
        paddingVertical: 6,
    },

    label: {
        fontSize: 14,
    },

    value: {
        flex: 1,
        marginLeft: Spacing.md,
        textAlign: "right",
        fontWeight: "600",
    },

});