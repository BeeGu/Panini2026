
import { useEffect, useState } from "react";

import useToast from "./useToast";

import BackupService from "../services/BackupService";

export default function useBackup() {
  const toast = useToast();

  const [backups, setBackups] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dialog, setDialog] = useState({
    type: null,
    backup: null,
  });

  useEffect(() => {
    reload();
  }, []);

  function openDialog(type, backup = null) {
    setDialog({
      type,
      backup,
    });
  }

  function closeDialog() {
    setDialog({
      type: null,
      backup: null,
    });
  }

  async function reload() {
    try {
      setLoading(true);

      const list = await BackupService.listBackups();

      setBackups(list);
    } finally {
      setLoading(false);
    }
  }

  async function createBackup() {
    try {
      await BackupService.createBackup();

      toast.success("Backup created.");

      await reload();
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Import a JSON file selected from the device
  async function importBackup() {
    try {
      const backup = await BackupService.loadBackup();

      if (!backup) return;

      openDialog("import", backup);
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Confirm imported JSON file
  async function confirmImport(reloadAlbum) {
    try {
      await BackupService.importCollection(dialog.backup);

      reloadAlbum?.();

      closeDialog();

      toast.success("Collection imported.");
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Restore a backup already stored inside the app
  async function restoreBackup(uri, reloadAlbum) {
    try {
      await BackupService.restoreBackup(uri);

      reloadAlbum?.();

      toast.success("Backup restored.");
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Confirm restore from stored backup
  async function confirmRestore(reloadAlbum) {
    try {
      await BackupService.restoreBackup(dialog.backup.uri);

      reloadAlbum?.();

      closeDialog();

      toast.success("Backup restored.");
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Delete a stored backup
  async function deleteBackup(uri) {
    try {
      await BackupService.deleteBackup(uri);

      toast.success("Backup deleted.");

      await reload();
    } catch (e) {
      toast.error(e.message);
    }
  }

  // Confirm deletion
  async function confirmDelete() {
    try {
      await BackupService.deleteBackup(dialog.backup.uri);

      closeDialog();

      toast.success("Backup deleted.");

      await reload();
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function shareBackup(uri) {
    try {
      await BackupService.shareBackup(uri);
    } catch (e) {
      toast.error(e.message);
    }
  }

  return {
    backups,
    loading,

    dialog,
    openDialog,
    closeDialog,

    reload,
    createBackup,
    importBackup,
    confirmImport,
    confirmRestore,
    confirmDelete,

    restoreBackup,
    deleteBackup,
    shareBackup,
  };
}
