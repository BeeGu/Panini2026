import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

function Row({ label, value }) {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <Text
        style={[
          styles.label,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {label}
      </Text>

      <Text
        style={[
          styles.value,
          {
            color: colors.text,
          },
        ]}
      >
        {value ?? "-"}
      </Text>
    </View>
  );
}

export default function StickerInfoCard({ sticker }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <View
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
        {t("sticker.information")}
      </Text>

      <Row label={t("sticker.code")} value={sticker.code} />

      <Row label={t("sticker.section")} value={sticker.section} />

      <Row label={t("sticker.team")} value={sticker.team} />

      <Row label={t("sticker.teamCode")} value={sticker.team_code} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    padding: Spacing.lg,
    borderRadius: 14,
    borderWidth: 1,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: Spacing.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },

  label: {
    fontSize: 14,
  },

  value: {
    flex: 1,
    marginLeft: Spacing.md,
    textAlign: "right",
    fontWeight: "600",
  },
});
