import db from "../db";

const BackupRepository = {

    exportCollection() {

        return db.getAllSync(`
            SELECT
                id,
                owned,
                duplicates,
                notes,
                obtained_at,
                updated_at
            FROM stickers
        `);

    },

    importCollection(collection) {
        db.execSync("BEGIN TRANSACTION");
        try {
            const stmt = db.prepareSync(`
                UPDATE stickers
                SET
                    owned = ?,
                    duplicates = ?,
                    notes = ?,
                    obtained_at = ?,
                    updated_at = ?
                WHERE id = ?
            `);
    
            try {
                collection.forEach(sticker => {
                    stmt.executeSync([
                        sticker.owned,
                        sticker.duplicates,
                        sticker.notes,
                        sticker.obtained_at,
                        sticker.updated_at,
                        sticker.id,
                    ]);
                });
            } finally {
                stmt.finalizeSync();
            }
            db.execSync("COMMIT");
        } catch (e) {
            db.execSync("ROLLBACK");
            throw e;
        }
    },

    getBackupStats() {

      const result = db.getFirstSync(`
          SELECT
              COUNT(*) AS total,

              SUM(
                  CASE
                      WHEN owned = 1 THEN 1
                      ELSE 0
                  END
              ) AS owned,

              SUM(
                  CASE
                      WHEN owned = 0 THEN 1
                      ELSE 0
                  END
              ) AS missing,

              SUM(duplicates) AS duplicates

          FROM stickers
      `);

      return {
          total: Number(result.total ?? 0),
          owned: Number(result.owned ?? 0),
          missing: Number(result.missing ?? 0),
          duplicates: Number(result.duplicates ?? 0),
      };
    },

};

export default BackupRepository;