import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function BackupEmpty() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons name="archive-outline" size={72} color={colors.textSecondary} />

      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        {t("backup.noBackups")}
      </Text>

      <Text
        style={[
          styles.subtitle,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {t("backup.createFirstBackup")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.xl * 2,
  },

  title: {
    marginTop: Spacing.lg,
    fontSize: Typography.h2,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: Spacing.sm,
    textAlign: "center",
    fontSize: Typography.body,
  },
});
