/*
const BackupValidator = {

    validate(backup) {

        if (!backup)
            throw new Error("Invalid backup.");

        if (backup.app !== "Panini Tracker 2026")
            throw new Error("Unknown backup.");

        if (!Array.isArray(backup.collection))
            throw new Error("Invalid collection.");

        return true;

    },

};

export default BackupValidator;
*/


const APP_NAME = "Panini Tracker 2026";
const BACKUP_VERSION = 1;

const BackupValidator = {

    validate(backup) {

        if (!backup)
            throw new Error("Backup file is empty.");

        if (backup.app !== APP_NAME)
            throw new Error("Invalid backup file.");

        if (backup.version !== BACKUP_VERSION)
            throw new Error("Unsupported backup version.");

        if (!Array.isArray(backup.collection))
            throw new Error("Invalid collection.");

        if (!backup.stats)
            throw new Error("Invalid backup.");

        if (typeof backup.stats.total !== "number")
            throw new Error("Invalid backup.");
      
        return true;

    },

};

export default BackupValidator;