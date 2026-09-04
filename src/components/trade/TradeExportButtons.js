import { useTranslation } from "react-i18next";
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
  onShareJson,
  onImport,
}) {
  const { t } = useTranslation();
  const modes = [
    {
      key: TRADE_MODES.BOTH,
      title: t("trade.both"),
    },
    {
      key: TRADE_MODES.DUPLICATES,
      title: t("trade.duplicates"),
    },
    {
      key: TRADE_MODES.MISSING,
      title: t("trade.missing"),
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
          title={t("trade.copy")}
          icon="copy-outline"
          onPress={onCopy}
          variant="primary"
          style={styles.actionButton}
        />

        <Button
          title={t("trade.share")}
          icon="share-outline"
          onPress={onShare}
          variant="secondary"
          style={styles.actionButton}
        />
      </View>

      <View style={styles.tradeActions}>
        <Button
          title={t("trade.shareJson")}
          icon="document-text-outline"
          onPress={onShareJson}
          variant="primary"
          style={styles.fullButton}
        />

        <Button
          title={t("trade.importJson")}
          icon="download-outline"
          onPress={onImport}
          variant="secondary"
          style={styles.fullButton}
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
    marginBottom: Spacing.md,
  },

  actionButton: {
    flex: 1,
  },

  tradeActions: {
    gap: 12,
  },

  fullButton: {
    width: "100%",
  },
});
