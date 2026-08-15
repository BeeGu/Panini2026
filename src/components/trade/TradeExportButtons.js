// ⭐️ Refactored
import { View, StyleSheet } from "react-native";

import FilterChip from "../common/FilterChip";
import Button from "../common/Button";

import Spacing from "../../theme/spacing";

export const TRADE_MODES = {
  BOTH: "both",
  DUPLICATES: "duplicates",
  MISSING: "missing",
};

export default function TradeExportButtons({
  mode,
  onModeChange,
  onCopy,
  onShare,
}) {
  const modes = [
    {
      key: TRADE_MODES.BOTH,
      title: "Both",
    },
    {
      key: TRADE_MODES.DUPLICATES,
      title: "Duplicates",
    },
    {
      key: TRADE_MODES.MISSING,
      title: "Missing",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        {modes.map((item) => (
          <FilterChip
            key={item.key}
            title={item.title}
            selected={mode === item.key}
            onPress={() => onModeChange(item.key)}
          />
        ))}
      </View>

      <View style={styles.actions}>
        <Button
          title="Copy"
          icon="copy-outline"
          onPress={onCopy}
          variant="primary"
          style={styles.actionButton}
        />

        <Button
          title="Share"
          icon="share-outline"
          onPress={onShare}
          variant="secondary"
          style={styles.actionButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
  },

  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: Spacing.md,
    gap: 8,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  actionButton: {
    flex: 1,
  },
});
