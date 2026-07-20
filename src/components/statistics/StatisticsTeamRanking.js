import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function StatisticsTeamRanking({

    teams,

}) {

    const ranking = [...teams]

        .sort((a, b) => b.percent - a.percent)

        .slice(0, 10);

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Top Teams
            </Text>

            {ranking.map(team => (

                <View
                    key={team.id}
                    style={styles.row}
                >

                    <Flag
                        iso2={team.iso2}
                        size={24}
                    />

                    <View style={styles.info}>

                        <Text>
                            {team.name}
                        </Text>

                        <ProgressBar
                            value={team.owned}
                            max={team.total}
                        />

                    </View>

                    <Text style={styles.percent}>
                        {team.percent}%
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
        fontWeight: "700",
        fontSize: 18,
        marginBottom: 14,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    info: {
        flex: 1,
        marginHorizontal: 12,
    },

    percent: {
        fontWeight: "700",
    },

});