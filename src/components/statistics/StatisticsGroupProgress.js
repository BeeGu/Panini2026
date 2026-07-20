import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatisticsGroupProgress({

    sections,

}) {

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Groups
            </Text>

            {sections.map(section => (

                <View
                    key={section.id}
                    style={styles.row}
                >

                    <Text style={styles.label}>
                        {section.name}
                    </Text>

                    <ProgressBar
                        value={section.owned}
                        max={section.total}
                    />

                    <Text style={styles.percent}>
                        {Math.round(
                            section.owned /
                            section.total *
                            100
                        ) || 0}
                        %
                    </Text>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        backgroundColor: Colors.white,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16,
    },

    row: {
        marginBottom: 14,
    },

    label: {
        marginBottom: 6,
        fontWeight: "600",
    },

    percent: {
        marginTop: 4,
        alignSelf: "flex-end",
        color: Colors.textSecondary,
    },

});