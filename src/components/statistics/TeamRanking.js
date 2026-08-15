import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";
import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function TeamRanking({ teams = [], limit = 10 }) {
  const { colors } = useTheme();

  const ranking = [...teams]
    .sort((a, b) => b.completion - a.completion)
    .slice(0, limit);

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
      {ranking.map((item) => {
        const team = item.team ?? item;

        return (
          <View key={item.id ?? team.id} style={styles.row}>
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
                {team.name ?? item.name}
              </Text>

              <ProgressBar value={item.owned} max={item.total} />
            </View>

            <Text
              style={[
                styles.percent,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {item.completion}%
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.lg,
    borderRadius: 16,
    borderWidth: 1,
    elevation: 2,
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

  label: {
    fontSize: Typography.body,
    fontWeight: "600",
    marginBottom: 5,
  },

  percent: {
    fontSize: Typography.body,
    fontWeight: "700",
  },
});
