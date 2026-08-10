import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
// import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import { formatStickerNumber } from "../../utils/formatters";
import Flag from "../common/Flag";
import StatusBadge from "../album/StatusBadge";
import Badge from "../common/Badge";

export default function StickerInfo({ sticker }) {
    const { colors } = useTheme();

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.teamRow}>

                    <Flag
                        iso2={sticker.team_iso2}
                    />

                    <Text
                      style={[
                          styles.team,
                          {
                              color: colors.textSecondary,
                          },
                      ]}
                    >
                        {sticker.team}
                    </Text>

                </View>

                {sticker.duplicates > 0 && (
                    <Badge
                        icon={"documents"}
                        text={`+${sticker.duplicates}`}
                        color={colors.primary}
                        // backgroundColor={colors.primary}
                    />
                )}

            </View>

            <Text
              style={[
                  styles.name,
                  {
                      color: colors.text,
                  },
              ]}
            >
                {formatStickerNumber(sticker.number)} {sticker.name}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    teamRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    team: {
        fontSize: Typography.body,
        // color: Colors.textSecondary,
        fontWeight: "600",
    },

    name: {
        marginTop: 6,
        fontSize: 18,
        // color: Colors.text,
        fontWeight: "700",
    },

});