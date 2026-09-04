import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

import Button from "../common/Button";

import Spacing from "../../theme/spacing";

export default function BackupToolbar({
  onCreate,
  onImport,
  creating = false,
  importing = false,
}) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title={t("backup.create")}
          icon="add-outline"
          onPress={onCreate}
          loading={creating}
        />
      </View>

      <View style={styles.button}>
        <Button
          title={t("backup.import")}
          icon="cloud-upload-outline"
          variant="secondary"
          onPress={onImport}
          loading={importing}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },

  button: {
    flex: 1,
  },
});
