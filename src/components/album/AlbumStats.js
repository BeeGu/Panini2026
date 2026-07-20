import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

import ProgressBar from "../common/ProgressBar";
import StatusBadge from "./StatusBadge";

import MathUtils from "../../utils/MathUtils";

export default function AlbumStats({
    owned,
    total,
    duplicates = 0,
}) {
    const missing = total - owned;
    const percent = MathUtils.percentage(owned, total, 0);

    return (
        <View style={styles.container}>
          
          {/*
            <ProgressBar
                value={owned}
                max={total}
                // height={12}
            />
            <Text style={styles.progress}>
                {owned} / {total} • {percent}%
            </Text>
          */}

          {/*
            <View style={styles.badges}>
          */}
          
            {missing === 0 ? (
                <StatusBadge
                    icon="checkmark-circle"
                    label="Completed"
                    color={Colors.success}
                />
            ) : (
                <StatusBadge
                    icon="alert-circle"
                    label={`${missing} Missing`}
                    color={Colors.warning}
                />
            )}

            {duplicates > 0 && (
                <StatusBadge
                    icon="documents" // albums, layers, copy
                    label={`${duplicates} Duplicates`}
                    color={Colors.primary}
                />
            )}

            {/* </View> */}

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
        gap: 8,
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