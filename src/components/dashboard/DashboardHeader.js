import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

// export default function DashboardHeader() {
export default function DashboardHeader({
    title = "🏆 Panini Tracker 2026",
    subtitle = "FIFA World Cup 2026",
}) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: "90%",
        alignItems: "center",
        marginBottom: Spacing.lg,
    },

    title: {
        fontSize: Typography.h1 || 30,
        fontWeight: "bold",
        color: Colors.primary,
        textAlign: "center",
    },

    subtitle: {
        marginTop: 8,
        fontSize: Typography.body || 18,
        color: Colors.textSecondary,
        textAlign: "center",
    },

});