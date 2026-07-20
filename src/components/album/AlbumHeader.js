import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import MathUtils from "../../utils/MathUtils";

export default function AlbumHeader({
    owned,
    total,
}) {
    const percentage = MathUtils.percentage(owned, total, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Album
            </Text>

            <Text style={styles.subtitle}>
                {owned} / {total} stickere ({percentage}%)
            </Text>

            <ProgressBar
                value={owned}
                max={total}
                height={12}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },

    title: {
        fontSize: Typography.h1,
        fontWeight: "700",
        color: Colors.primary,
    },

    subtitle: {
        marginTop: 4,
        fontSize: Typography.body,
        color: Colors.textSecondary,
    },

});