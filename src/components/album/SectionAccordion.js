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

import TeamAccordion from "./TeamAccordion";
import ProgressBar from "../common/ProgressBar";

export default function SectionAccordion({
    section,
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

                    <Text style={styles.title}>
                        {section.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {section.owned} / {section.total}
                    </Text>
                    
                    <ProgressBar
                        value={section.owned}
                        max={section.total}
                    />

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

                <View style={styles.content}>

                    {section.teams.map((team, index) => (

                        <TeamAccordion
                            key={team.id}
                            team={team}
                            onToggle={onToggle}
                            defaultExpanded={index === 0}
                        />

                    ))}

                </View>

            )}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: Spacing.md,
        marginVertical: 8,
        backgroundColor: Colors.white,
        borderRadius: 16,
        elevation: 2,
        overflow: "hidden",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Spacing.lg,
    },

    left: {
        flex: 1,
    },

    title: {
        fontSize: Typography.h3 ?? 20,
        fontWeight: "700",
        color: Colors.text,
    },

    subtitle: {
        marginTop: 4,
        color: Colors.textSecondary,
        fontSize: Typography.body,
        // marginBottom: 6,
    },

    content: {
        paddingBottom: Spacing.sm,
    },

});