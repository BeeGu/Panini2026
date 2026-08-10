import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { ScrollView } from "react-native";
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

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { appearance, setAppearance, colors } = useTheme();
  const { developerMode, toggleDeveloperMode } = useSettings();
  const { generalStats, reload } = useAlbum();

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <ScreenHeader
          title="Settings"
          icon="settings-outline"
          subtitle="Application preferences"
        />

        <ScrollView
          contentContainerStyle={{
            paddingVertical: 16,
            paddingBottom: 32,
          }}
        >
          {/* General */}
          <SettingsSection title="General">
            <SettingsInfoItem
              icon="phone-portrait-outline"
              title="App Version"
              value={generalStats.version}
            />

            <SettingsInfoItem
              icon="server-outline"
              title="Database Version"
              value={generalStats.databaseVersion}
            />
          </SettingsSection>

          {/* Collection */}
          <SettingsSection title="Collection">
            <SettingsInfoItem
              icon="layers-outline"
              title="Sections"
              value={generalStats.sections}
            />

            <SettingsInfoItem
              icon="flag-outline"
              title="Teams"
              value={generalStats.teams}
            />

            <SettingsInfoItem
              icon="albums-outline"
              title="Stickers"
              value={generalStats.total}
            />

            <SettingsInfoItem
              icon="checkmark-circle-outline"
              title="Owned"
              value={generalStats.owned}
            />

            <SettingsInfoItem
              icon="alert-circle-outline"
              title="Missing"
              value={generalStats.missing}
            />

            <SettingsInfoItem
              icon="gift-outline"
              title="Duplicates"
              value={generalStats.duplicates}
            />
          </SettingsSection>

          {/* Developer */}
          <SettingsSection title="Developer">
            <SettingsSwitchItem
              icon="code-slash-outline"
              title="Developer mode"
              subtitle="Enable developer tools"
              value={developerMode}
              onValueChange={toggleDeveloperMode}
            />
          </SettingsSection>

          {/* Appearance */}
          <SettingsSection title="Appearance">
            <AppearanceSelector value={appearance} onChange={setAppearance} />
          </SettingsSection>

          {/* Collection actions */}
          <SettingsSection title="Collection">
            <SettingsActionItem
              icon="refresh-outline"
              title="Reset Collection"
              subtitle="Remove owned stickers and duplicates"
            />

            <SettingsActionItem
              icon="construct-outline"
              title="Rebuild Database"
              subtitle="Recreate SQLite database"
            />
          </SettingsSection>

          {/* Backup */}
          <SettingsSection title="Backup">
            <SettingsActionItem
              icon="cloud-outline"
              title="Backup Manager"
              subtitle="Manage local backups"
              onPress={() => navigation.navigate("Backup")}
            />
          </SettingsSection>

          {/* About */}
          <SettingsSection title="About">
            <SettingsInfoItem
              icon="information-circle-outline"
              title="Version"
              value={Constants.expoConfig?.version}
            />

            <SettingsInfoItem
              icon="albums-outline"
              title="Album"
              value="Panini FIFA World Cup 2026"
              // value={Constants.expoConfig?.name}
            />
          </SettingsSection>
        </ScrollView>
      </SafeAreaView>
      
    </>
  );
}
