import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Column from "../common/Column";
import StatItem from "../common/StatItem";
import Divider from "../common/Divider";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function TradeSummaryCard({ summary }) {
  const { colors } = useTheme();

  return (
    <Card>
      <Column gap={12}>
        <StatItem icon="gift" value={summary.duplicates} label="Duplicates" />

        <Divider />

        <StatItem icon="alert-circle" value={summary.missing} label="Missing" />
      </Column>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: Spacing.md,
    padding: Spacing.lg,
    borderRadius: 16,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },

  value: {
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 10,
  },

  label: {
    marginLeft: 8,
  },
});
