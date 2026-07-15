import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function SectionHeader({ title }) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,
    },

    title: {
        fontSize: Typography.body,
        fontWeight: "700",
        color: Colors.primary,
        textTransform: "uppercase",
    },

});