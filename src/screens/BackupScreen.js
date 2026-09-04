import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import useTheme from "../hooks/useTheme";
import useBackup from "../hooks/useBackup";
import useAlbum from "../hooks/useAlbum";

import BackupStats from "../components/backup/BackupStats";
import BackupToolbar from "../components/backup/BackupToolbar";
import BackupList from "../components/backup/BackupList";
import BackupEmpty from "../components/backup/BackupEmpty";

import RestoreBackupDialog from "../components/backup/RestoreBackupDialog";
import RestoreStoredBackupDialog from "../components/backup/RestoreStoredBackupDialog";
import DeleteBackupDialog from "../components/backup/DeleteBackupDialog";

export default function BackupScreen() {
  const { colors } = useTheme();

  const {
    backups,
    loading,
    createBackup,
    importBackup,
    confirmImport,
    confirmRestore,
    confirmDelete,
    dialog,
    openDialog,
    closeDialog,
    shareBackup,
  } = useBackup();

  const { reload } = useAlbum();

  function handleRestore(uri) {
    restoreBackup(uri, reload);
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <BackupStats backups={backups} />

      <BackupToolbar
        onCreate={createBackup}
        onImport={importBackup}
        creating={loading}
      />
      {backups.length === 0 ? (
        <BackupEmpty />
      ) : (
        <BackupList
          backups={backups}
          onRestore={(backup) => openDialog("restore", backup)}
          onDelete={(backup) => openDialog("delete", backup)}
          onShare={shareBackup}
        />
      )}
      <RestoreBackupDialog
        visible={dialog.type === "import"}
        backup={dialog.backup}
        onCancel={closeDialog}
        onRestore={() => confirmImport(reload)}
      />
      <RestoreStoredBackupDialog
        visible={dialog.type === "restore"}
        backup={dialog.backup}
        onCancel={closeDialog}
        onRestore={() => confirmRestore(reload)}
      />
      <DeleteBackupDialog
        visible={dialog.type === "delete"}
        backup={dialog.backup}
        onCancel={closeDialog}
        onDelete={confirmDelete}
      />
    </SafeAreaView>
  );
}
