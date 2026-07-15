/*
import { View, StyleSheet } from "react-native";
import StickerItem from "../stickers/StickerItem";

export default function TeamAccordion({
    stickers,
    onToggle,
}) {

    return (

        <View style={styles.container}>

            {stickers.map(sticker => (

                <StickerItem
                    key={sticker.id}
                    sticker={sticker}
                    onToggle={onToggle}
                />

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        marginTop: 12,
    },

});
*/



import { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import Flag from "../common/Flag";
import ProgressBar from "../common/ProgressBar";
import StickerList from "./StickerList";

export default function TeamAccordion({
    team,
    onToggle,
    defaultExpanded = false,
}) {

    const [expanded, setExpanded] = useState(defaultExpanded);

    return (

        <View style={styles.container}>

            <Pressable
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >

                <View style={styles.left}>

                    <Flag
                        iso2={team.iso2}
                        size={28}
                    />

                    <View style={styles.info}>

                        <Text style={styles.name}>
                            {team.name}
                        </Text>

                        <Text style={styles.progress}>
                            {team.owned} / {team.total}
                        </Text>
                        
                        <ProgressBar
                            value={team.owned}
                            max={team.total}
                        />

                    </View>

                </View>

                <Ionicons
                    name={
                        expanded
                            ? "chevron-down"
                            : "chevron-forward"
                    }
                    size={22}
                    color={Colors.textSecondary}
                />

            </Pressable>

            {expanded && (

                <StickerList
                    stickers={team.stickers}
                    onToggle={onToggle}
                />

            )}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: Spacing.sm,
        marginBottom: Spacing.sm,
        borderRadius: 12,
        backgroundColor: "#FAFAFA",
        overflow: "hidden",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: Spacing.md,
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    info: {
        marginLeft: Spacing.md,
        flex: 1,
    },

    name: {
        fontSize: 17,
        fontWeight: "700",
        color: Colors.text,
    },

    progress: {
        marginTop: 2,
        color: Colors.textSecondary,
        fontSize: Typography.body,
        marginBottom: 6,
    },

});