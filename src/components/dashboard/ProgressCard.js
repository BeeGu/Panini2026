import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";

import MathUtils from "../../utils/MathUtils";

export default function ProgressCard({ title, owned = 0, total = 980 }) {
  const { colors } = useTheme();

  const percent = MathUtils.percentage(owned, total, 0);

  return (
    <Card
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        {title}
      </Text>

      <ProgressBar value={owned} max={total} height={15} />

      <Text
        style={[
          styles.progress,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {owned} / {total} ({percent}%)
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  progress: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
