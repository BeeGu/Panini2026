import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import Badge from "../common/Badge";

export default function AlbumStats({ owned, total, duplicates = 0 }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const missing = Math.max(0, total - owned);

  return (
    <View style={styles.container}>
      {missing === 0 ? (
        <Badge
          icon="checkmark-circle"
          text={t("common.completed")}
          color={colors.success}
        />
      ) : (
        <Badge
          icon="alert-circle"
          text={t("album.stats.missing", { count: missing })}
          color={colors.warning}
        />
      )}

      {duplicates > 0 && (
        <Badge
          icon="documents"
          text={t("album.stats.duplicates", { count: duplicates })}
          color={colors.primary}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 8,
  },
});
