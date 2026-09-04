import * as FileSystem from "expo-file-system/legacy";
import { File, Directory, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as DocumentPicker from "expo-document-picker";

import BackupValidator from "../utils/BackupValidator";
import BackupRepository from "../database/repositories/BackupRepository";

const BACKUP_FOLDER = "backups";
const BACKUP_PREFIX = "PaniniTracker2026";

// helpers
function getBackupDirectory() {
  return new Directory(Paths.document, BACKUP_FOLDER);
}

function ensureBackupDirectory() {
  const directory = getBackupDirectory();

  if (!directory.exists) {
    directory.create();
  }

  return directory;
}

function backupFilename() {
  const d = new Date();

  const pad = (value) => String(value).padStart(2, "0");

  return `${BACKUP_PREFIX}_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
    d.getDate(),
  )}_${pad(d.getHours())}-${pad(d.getMinutes())}.json`;
}

function buildBackup() {
  return {
    app: "Panini Tracker 2026",
    album: "FIFA World Cup 2026",
    version: 1,
    createdAt: new Date().toISOString(),
    stats: BackupRepository.getBackupStats(),
    collection: BackupRepository.exportCollection(),
  };
}

function parseBackup(json) {
  const backup = JSON.parse(json);

  BackupValidator.validate(backup);

  return backup;
}

async function readJsonFile(uri) {
  try {
    const file = new File(uri);
    return await file.text();
  } catch {
    return await FileSystem.readAsStringAsync(uri);
  }
}

async function readBackupFile(file) {
  const json = await readJsonFile(file.uri);

  return {
    uri: file.uri,
    name: file.name,
    size: file.size,
    ...parseBackup(json),
  };
}

async function readBackupUri(uri) {
  const file = new File(uri);

  return await readBackupFile(file);
}

const BackupService = {
  // createBackup
  async createBackup() {
    const directory = ensureBackupDirectory();
    const file = new File(directory, backupFilename());

    file.write(JSON.stringify(buildBackup(), null, 2));
    return await readBackupFile(file);
  },
  // listBackups
  async listBackups() {
    const directory = ensureBackupDirectory();

    if (!directory.exists) return [];

    const backups = [];

    for (const file of directory.list()) {
      if (!file.name.toLowerCase().endsWith(".json")) continue;

      try {
        backups.push(await readBackupFile(file));
      } catch {
        console.warn("Skipping invalid backup", file.name);
      }
    }

    backups.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return backups;
  },
  // loadBackup
  async loadBackup() {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/json",
      copyToCacheDirectory: false,
    });

    if (result.canceled) return null;

    return await readBackupUri(result.assets[0].uri);
  },

  // importCollection
  async importCollection(backup) {
    BackupRepository.replaceCollection(backup.collection);
  },
  // restoreBackup
  async restoreBackup(uri) {
    const backup = await readBackupUri(uri);

    BackupRepository.replaceCollection(backup.collection);
  },

  // deleteBackup
  async deleteBackup(uri) {
    new File(uri).delete();
  },

  // shareBackup
  async shareBackup(uri) {
    await Sharing.shareAsync(uri);
  },

  // exportCollection
  async exportCollection() {
    const file = new File(Paths.cache, backupFilename());

    file.write(JSON.stringify(buildBackup(), null, 2));

    await Sharing.shareAsync(file.uri);
  },

  async readBackup(uri) {
    return await readBackupUri(uri);
  },
};

export default BackupService;
