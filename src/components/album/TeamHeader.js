import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Flag from "../common/Flag";
import TeamStats from "./TeamStats";
import AlbumStats from "./AlbumStats";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function TeamHeader({
    team,
    expanded,
}) {

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.left}>
                    <Flag
                        iso2={team.iso2}
                        size={34}
                    />
                    <Text style={styles.name}>
                        {team.name}
                    </Text>
                </View>

                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={22}
                    color={Colors.textSecondary}
                />
            </View>

            {/* <TeamStats
                team={team}
            /> */}
          
            <AlbumStats
                owned={team.owned}
                total={team.total}
                duplicates={team.duplicates}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        padding: Spacing.md,
    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    name: {
        marginLeft: 12,
        // fontSize: 18,
        fontSize: Typography.bodyLarge,
        fontWeight: "700",
        color: Colors.text,
    },

});