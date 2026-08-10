import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";

import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function StatisticsTeamRanking({
    teams,
}) {
    const { colors } = useTheme();

    const ranking = [...teams]
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 50);

    return (

        <View
          style={[
              styles.card,
              {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
              },
          ]}
        >

          {/*<Text
              style={[
                  styles.title,
                  {
                      color: colors.text,
                  },
              ]}
            >
                Top Teams
            </Text>*/}

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

                        <Text
                            style={[
                                styles.label,
                                {
                                    color: colors.text,
                                },
                            ]}
                        >
                            {team.name}
                        </Text>

                        <ProgressBar
                            value={team.owned}
                            max={team.total}
                        />

                    </View>

                    <Text
                      style={[
                          styles.percent,
                          {
                              color: colors.textSecondary,
                          },
                      ]}
                    >
                        {team.percent}%
                    </Text>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
       // margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        elevation: 2,
    },

    // title: {
    //     fontWeight: "700",
    //     fontSize: 18,
    //     marginBottom: 14,
    // },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    info: {
        flex: 1,
        marginHorizontal: 12,
    },

    label: {
        // marginBottom: 6,
        fontWeight: "600",
    },
  
    percent: {
        fontWeight: "700",
    },

});