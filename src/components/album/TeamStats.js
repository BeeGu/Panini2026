import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";
import StatusBadge from "./StatusBadge";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

import MathUtils from "../../utils/MathUtils";

export default function TeamStats({ team }) {
    const missing = team.total - team.owned;
    const percent = MathUtils.percentage(team.owned, team.total, 0);

    const duplicates = team.stickers.reduce(
        (sum, sticker) => sum + sticker.duplicates,
        0
    );
    // console.log ("🔔 AlbumService duplicates", duplicates)

  
    console.log ("🟢🛠 TEAM ST", team.duplicates )
  
    return (
        <View style={styles.container}>
            <ProgressBar
                value={team.owned}
                max={team.total}
            />

            <Text style={styles.progress}>
                {team.owned} / {team.total} • {percent}%
            </Text>

            <View style={styles.badges}>
                {missing === 0 ? (
                    <StatusBadge
                        // label="🏆 Completed"
                        // color="#2563EB"
                        icon="checkmark-circle"
                        label="Completed"
                        color={Colors.success}
                    />
                ) : (
                    <StatusBadge
                        // label={`❗ ${missing} Missing`}
                        // color="#F59E0B"
                        icon="alert-circle"
                        label={`${missing} Missing`}
                        color={Colors.warning}
                    />
                )}

                {team.duplicates > 0 && (
                    <StatusBadge
                        // label={`🎁 ${team.duplicates} Duplicates`}
                        // color="#10B981"
                        icon="documents" // albums, layers, copy
                        label={`${duplicates} Duplicates`}
                        color={Colors.primary}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: Spacing.sm,
    },

    progress: {
        marginTop: 8,
        color: Colors.textSecondary,
        fontSize: 13,
    },

    badges: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
    },

});