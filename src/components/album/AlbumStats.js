import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
// import Colors from "../../theme/colors";

import ProgressBar from "../common/ProgressBar";
import StatusBadge from "./StatusBadge";

import MathUtils from "../../utils/MathUtils";

export default function AlbumStats({
    owned,
    total,
    duplicates = 0,
}) {
    const { colors } = useTheme();

    const missing = total - owned;
    const percent = MathUtils.percentage(owned, total, 0);

    return (
        <View style={styles.container}>
          
            {missing === 0 ? (
                <StatusBadge
                    icon="checkmark-circle"
                    label="Completed"
                    color={colors.success}
                />
            ) : (
                <StatusBadge
                    icon="alert-circle"
                    label={`${missing} Missing`}
                    color={colors.warning}
                />
            )}

            {duplicates > 0 && (
                <StatusBadge
                    icon="documents" // albums, layers, copy
                    label={`${duplicates} Duplicates`}
                    color={colors.primary}
                />
            )}

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
        gap: 8,
    }

});