import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Row from "./Row";

import Colors from "../../theme/colors";

export default function StatItem({
    icon,
    value,
    label,
}) {

    return (

        <Row gap={8} justify="flex-start">

            <Ionicons
                name={icon}
                size={20}
                color={Colors.primary}
            />

            <Text style={styles.value}>
                {value}
            </Text>

            <Text style={styles.label}>
                {label}
            </Text>

        </Row>

    );

}

const styles = StyleSheet.create({

    value: {
        fontWeight: "700",
        fontSize: 18,
    },

    label: {
        color: Colors.textSecondary,
    },

});