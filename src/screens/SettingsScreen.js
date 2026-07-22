import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SettingsSection from "../components/settings/SettingsSection";
import SettingsSwitchItem from "../components/settings/SettingsSwitchItem";
import SettingsInfoItem from "../components/settings/SettingsInfoItem";
import SettingsActionItem from "../components/settings/SettingsActionItem";

import useSettings from "../hooks/useSettings";
import useAlbum from "../hooks/useAlbum";

import Constants from "expo-constants";

import Colors from "../theme/colors";

import BackupService from "../services/BackupService";
import RestoreBackupDialog from "../components/settings/RestoreBackupDialog";
import Toast from "../components/common/Toast";

export default function SettingsScreen() {

    const {
        developerMode,
        toggleDeveloperMode,
    } = useSettings();

    const {
        generalStats,
        reload,
    } = useAlbum();

    const [backupToRestore, setBackupToRestore] = useState(null);

    /*async function handleRestore() {
    
        try {
            await BackupService.restoreBackup();
    
            reload();
    
            Toast.success("Backup restored successfully.");
        } catch (e) {
            Toast.error(e.message);
        }
    } */

    async function handleRestore() {
        try {
            const backup = await BackupService.loadBackup();
            // console.log ("💎 handleRestore", {backup})

            if (!backup)
                return;

            setBackupToRestore(backup);
        } catch (e) {
            Toast.error(e.message);
        }
    }

    async function confirmRestore() {
      try {
          await BackupService.restoreBackup(backupToRestore);
  
          setBackupToRestore(null);
  
          reload();
  
          Toast.success("Backup restored successfully.");
      } catch (e) {
          Toast.error(e.message);
      }
    }

    return (
      <>
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.background,
            }}
        >

            <ScrollView>

                <SettingsSection title="General">

                    <SettingsInfoItem
                        icon="albums-outline"
                        title="Album"
                        value="Panini FIFA World Cup 2026"
                    />
                  
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
                              
              {/* todo */}
              {/* <SettingsSection title="Collection">
                
                    <SettingsActionItem
                        icon="refresh-outline"
                        title="Reset Collection"
                        subtitle="Remove owned stickers and duplicates"
                        // onPress={resetCollection}
                    />
                
                    <SettingsActionItem
                        icon="construct-outline"
                        title="Rebuild Database"
                        subtitle="Recreate SQLite database"
                        // onPress={rebuildDatabase}
                    />
                
                </SettingsSection> */}
                
                <SettingsSection title="Backup">
                
                    <SettingsActionItem
                        icon="download-outline"
                        title="Export Backup"
                        subtitle="Save your collection"
                        onPress={BackupService.exportBackup}
                    />

                  {/* todo *}
                  {/* <SettingsActionItem
                        // icon="download-outline"
                        icon="cloud-upload-outline"
                        // icon="folder-open-outline"
                        title="Restore Backup"
                        subtitle="Restore your collection"
                        onPress={handleRestore}
                    /> */}
                  
                </SettingsSection>
                              
              {/* <SettingsSection title="Trade">
                
                    <SettingsActionItem
                        icon="copy-outline"
                        title="Copy Trade List"
                    />
                
                    <SettingsActionItem
                        icon="share-social-outline"
                        title="Share Trade List"
                    />
                
                    <SettingsActionItem
                        icon="document-text-outline"
                        title="Export TXT"
                    />
                
                </SettingsSection> */}

                <SettingsSection title="Developer">

                    <SettingsSwitchItem
                        icon="code-slash-outline"
                        title="Developer mode"
                        subtitle="Enable developer tools"
                        value={developerMode}
                        onValueChange={toggleDeveloperMode}
                    />

                </SettingsSection>
              
            </ScrollView>

        </SafeAreaView>

        <RestoreBackupDialog
            visible={!!backupToRestore}
            backup={backupToRestore}
            onCancel={() => setBackupToRestore(null)}
            onRestore={confirmRestore}
        />
  
      </>
    );

}