import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { ScrollView, TextInput, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Constants from "expo-constants";

import useTheme from "../hooks/useTheme";
import useSettings from "../hooks/useSettings";
import useAlbum from "../hooks/useAlbum";

import ScreenHeader from "../components/common/ScreenHeader";

import SettingsSection from "../components/settings/SettingsSection";
import SettingsSwitchItem from "../components/settings/SettingsSwitchItem";
import SettingsInfoItem from "../components/settings/SettingsInfoItem";
import SettingsActionItem from "../components/settings/SettingsActionItem";
import AppearanceSelector from "../components/settings/AppearanceSelector";

import ResetCollectionDialog from "../components/settings/ResetCollectionDialog";
import AlbumService from "../services/AlbumService";

import RebuildDatabaseDialog from "../components/settings/RebuildDatabaseDialog";
import { rebuildAppDatabase } from "../database/DatabaseManager";

import LanguageSelector from "../components/settings/LanguageSelector";
import useLanguage from "../hooks/useLanguage";

import SettingsService from "../services/SettingsService";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { appearance, setAppearance, colors } = useTheme();
  const { developerMode, toggleDeveloperMode } = useSettings();
  const { generalStats, reload } = useAlbum();
  const { language, setLanguage } = useLanguage();

  const [resetDialogVisible, setResetDialogVisible] = useState(false);
  const [rebuildDialogVisible, setRebuildDialogVisible] = useState(false);

  const [tradeUserName, setTradeUserName] = useState(
    SettingsService.getTradeUserName(),
  );

  function handleResetCollection() {
    setResetDialogVisible(true);
  }

  function closeResetDialog() {
    setResetDialogVisible(false);
  }

  function confirmResetCollection() {
    setResetDialogVisible(false);
  }

  function handleRebuildDatabase() {
    setRebuildDialogVisible(true);
  }

  function closeRebuildDialog() {
    setRebuildDialogVisible(false);
  }

  function confirmRebuildDatabase() {
    try {
      rebuildAppDatabase();

      setRebuildDialogVisible(false);

      reload();
    } catch (error) {
      console.error("Failed to rebuild database:", error);
    }
  }

  function handleTradeUserNameChange(value) {
    setTradeUserName(value);
    SettingsService.setTradeUserName(value);
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScreenHeader
        icon="settings-outline"
        title={t("settings.title")}
        subtitle={t("settings.subtitle")}
      />

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 16,
          paddingBottom: 32,
        }}
      >
        {/* General */}
        <SettingsSection title={t("settings.general")}>
          <LanguageSelector
            title={t("settings.language")}
            subtitle={t("settings.languageDescription")}
            value={language}
            onChange={setLanguage}
          />

          <SettingsInfoItem
            icon="phone-portrait-outline"
            title={t("settings.appVersion")}
            value={generalStats.version}
          />

          <SettingsInfoItem
            icon="server-outline"
            title={t("settings.databaseVersion")}
            value={generalStats.databaseVersion}
          />
        </SettingsSection>

        {/* Collection */}
        <SettingsSection title={t("settings.collection")}>
          <SettingsInfoItem
            icon="layers-outline"
            title={t("settings.sections")}
            value={generalStats.sections}
          />

          <SettingsInfoItem
            icon="flag-outline"
            title={t("settings.teams")}
            value={generalStats.teams}
          />

          <SettingsInfoItem
            icon="albums-outline"
            title={t("settings.stickers")}
            value={generalStats.total}
          />

          <SettingsInfoItem
            icon="checkmark-circle-outline"
            title={t("settings.owned")}
            value={generalStats.owned}
          />

          <SettingsInfoItem
            icon="alert-circle-outline"
            title={t("settings.missing")}
            value={generalStats.missing}
          />

          <SettingsInfoItem
            icon="gift-outline"
            title="Duplicates"
            value={generalStats.duplicates}
          />
        </SettingsSection>

        {/* Trade */}
        <SettingsSection title={t("settings.trade")}>
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              {t("settings.tradeUserName")}
            </Text>

            <Text
              style={[styles.inputDescription, { color: colors.textSecondary }]}
            >
              {t("settings.tradeUserNameDescription")}
            </Text>

            <TextInput
              value={tradeUserName}
              onChangeText={handleTradeUserNameChange}
              placeholder={t("settings.tradeUserNamePlaceholder")}
              placeholderTextColor={colors.textSecondary}
              style={[
                styles.input,
                {
                  color: colors.text,
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
              maxLength={50}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>
        </SettingsSection>

        {/* Developer */}
        <SettingsSection title={t("settings.developer")}>
          <SettingsSwitchItem
            icon="code-slash-outline"
            title={t("settings.developerMode")}
            subtitle={t("settings.developerModeDescription")}
            value={developerMode}
            onValueChange={toggleDeveloperMode}
          />

          {/*{__DEV__ && developerMode && (*/}
          {developerMode && (
            <SettingsActionItem
              icon="server-outline"
              title={t("settings.databaseInspector")}
              subtitle={t("settings.databaseInspectorDescription")}
              onPress={() => navigation.navigate("DatabaseInspector")}
            />
          )}
        </SettingsSection>

        {/* Appearance */}
        <SettingsSection title={t("settings.appearance")}>
          <AppearanceSelector value={appearance} onChange={setAppearance} />
        </SettingsSection>

        {/* Collection actions */}
        {developerMode && (
          <SettingsSection title={t("settings.collection")}>
            <SettingsActionItem
              icon="refresh-outline"
              title={t("settings.resetCollection")}
              subtitle={t("settings.resetCollectionDescription")}
              onPress={handleResetCollection}
            />

            <SettingsActionItem
              icon="construct-outline"
              title={t("settings.rebuildDatabase")}
              subtitle={t("settings.rebuildDatabaseDescription")}
              onPress={handleRebuildDatabase}
            />
          </SettingsSection>
        )}

        {/* Backup */}
        <SettingsSection title={t("settings.backup")}>
          <SettingsActionItem
            icon="cloud-outline"
            title={t("settings.backupManager")}
            subtitle={t("settings.backupManagerDescription")}
            onPress={() => navigation.navigate("Backup")}
          />
        </SettingsSection>

        {/* About */}
        <SettingsSection title={t("settings.about")}>
          <SettingsInfoItem
            icon="information-circle-outline"
            title={t("settings.version")}
            value={Constants.expoConfig?.version}
          />

          <SettingsInfoItem
            icon="albums-outline"
            title={t("settings.album")}
            value={t("settings.albumName")}
          />
        </SettingsSection>
      </ScrollView>

      <ResetCollectionDialog
        visible={resetDialogVisible}
        onCancel={closeResetDialog}
        onReset={() => {
          AlbumService.resetCollection();
          setResetDialogVisible(false);
          reload();
        }}
      />

      <RebuildDatabaseDialog
        visible={rebuildDialogVisible}
        onCancel={closeRebuildDialog}
        onRebuild={confirmRebuildDatabase}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  inputDescription: {
    fontSize: 13,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
