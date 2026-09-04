import db from "./db";

const DB_VERSION = 3;

export function runMigrations() {
  const currentVersion = Number(
    db.getFirstSync("SELECT value FROM app_metadata WHERE key = 'db_version'")
      ?.value ?? 0,
  );

  if (currentVersion < 2) {
    migrateToV2();
  }

  if (currentVersion < 3) {
    migrateToV3();
  }

  db.runSync(
    `
      INSERT INTO app_metadata(key, value)
      VALUES('db_version', ?)
      ON CONFLICT(key)
      DO UPDATE SET value = excluded.value
    `,
    [String(DB_VERSION)],
  );
}

function migrateToV2() {
  const columns = db.getAllSync("PRAGMA table_info(stickers)");

  const hasType = columns.some((column) => column.name === "type");

  if (!hasType) {
    db.execSync(`
      ALTER TABLE stickers
      ADD COLUMN type TEXT NOT NULL DEFAULT 'regular'
    `);
  }
}

function migrateToV3() {
  const columns = db.getAllSync("PRAGMA table_info(stickers)");

  const hasSectionId = columns.some((column) => column.name === "section_id");

  if (!hasSectionId) {
    db.execSync(`
      ALTER TABLE stickers
      ADD COLUMN section_id INTEGER
    `);
  }
}
