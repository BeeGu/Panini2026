import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function TeamHeader({
    team,
    owned,
    total,
}) {

    return (

        <View style={styles.container}>

            <Flag
                iso2={team.iso2}
                size={34}
            />

            <View style={styles.info}>

                <Text style={styles.name}>
                    {team.name}
                </Text>

                <Text style={styles.progress}>
                    {owned}/{total}
                </Text>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
    },

    info: {
        marginLeft: Spacing.md,
        flex: 1,
    },

    name: {
        fontSize: Typography.bodyLarge,
        fontWeight: "700",
        color: Colors.text,
    },

    progress: {
        color: Colors.textSecondary,
        marginTop: 2,
    },

});