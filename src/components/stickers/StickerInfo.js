// src/components/stickers/StickerInfo.js

import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import { formatStickerNumber } from "../../utils/formatters";
import Flag from "../common/Flag";
import Badge from "../common/Badge";

export default function StickerInfo({
  sticker,
  showDuplicates = true,
  showCode = true,
}) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teamRow}>
          <Flag iso2={sticker.team_iso2} />

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

        {showDuplicates && sticker.duplicates > 0 && (
          <Badge
            icon="documents"
            text={`+${sticker.duplicates}`}
            color={colors.primary}
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

      {showCode && sticker.code && (
        <Text
          style={[
            styles.code,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {sticker.code}
        </Text>
      )}
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
    fontWeight: "600",
  },

  name: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "700",
  },

  code: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "500",
  },
});
