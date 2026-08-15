import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function SectionRanking({ sections = [], limit = 10 }) {
  const { colors } = useTheme();

  const ranking = [...sections]
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
      {ranking.map((section) => (
        <View key={section.id} style={styles.row}>
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
              {section.name}
            </Text>

            <ProgressBar value={section.owned} max={section.total} />
          </View>

          <Text
            style={[
              styles.percent,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {section.completion}%
          </Text>
        </View>
      ))}
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
    marginRight: 12,
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
