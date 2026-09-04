import { StyleSheet, Text, View } from "react-native";

import Flag from "../common/Flag";
import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function StatisticsTeamRanking({ teams = [] }) {
  const { colors } = useTheme();

  const ranking = [...teams].sort((a, b) => b.percent - a.percent).slice(0, 50);

  const ranking2 = [...teams]
    .sort((a, b) => b.completion - a.completion)
    .slice(0, 50);

  return (
    <View style={styles.container}>
      {ranking.map((team) => (
        <View key={team.id} style={styles.row}>
          <Flag iso2={team.iso2} size={24} />

          <View style={styles.info}>
            <Text
              style={[
                styles.label,
                {
                  color: colors.text,
                },
              ]}
              numberOfLines={1}
            >
              {team.name}
            </Text>

            <ProgressBar value={team.owned} max={team.total} />
          </View>

          <Text
            style={[
              styles.percent,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {/*{team.completion}%*/}
            {team.percent}%
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.md,
  },

  info: {
    flex: 1,
    marginHorizontal: Spacing.md,
  },

  label: {
    fontSize: Typography.body,
    fontWeight: "600",
    marginBottom: Spacing.xs,
  },

  percent: {
    fontSize: Typography.caption,
    fontWeight: "700",
  },
});
