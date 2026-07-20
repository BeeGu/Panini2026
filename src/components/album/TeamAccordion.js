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
import TeamHeader from "../album/TeamHeader";


export default function TeamAccordion({
    team,
    onToggle,
    defaultExpanded = false,
}) {
    const [expanded, setExpanded] = useState(defaultExpanded);

    function toggleExpanded() {
            setExpanded(prev => !prev);
    }
  
    return (
        <View style={styles.container}>
            <Pressable onPress={toggleExpanded}>
                <TeamHeader
                    team={team}
                    expanded={expanded}
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
