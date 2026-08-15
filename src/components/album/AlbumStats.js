// ⭐️ Refactored
import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import Badge from "../common/Badge";

export default function AlbumStats({ owned, total, duplicates = 0 }) {
  const { colors } = useTheme();

  const missing = Math.max(0, total - owned);

  return (
    <View style={styles.container}>
      {missing === 0 ? (
        <Badge
          icon="checkmark-circle"
          text="Completed"
          color={colors.success}
        />
      ) : (
        <Badge
          icon="alert-circle"
          text={`${missing} Missing`}
          color={colors.warning}
        />
      )}

      {duplicates > 0 && (
        <Badge
          icon="documents"
          text={`${duplicates} Duplicates`}
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
