import db from "./db";
import { initializeDatabase } from "./schema";
import { runMigrations } from "./migrations";
import { seedDatabase } from "./seed";

export function initializeAppDatabase() {
  // create tables if missing
  initializeDatabase();

  // update schema if needed
  runMigrations();

  // seed only first time
  const seeded = db.getFirstSync(
    "SELECT value FROM app_metadata WHERE key='seeded'",
  );

  if (!seeded) {
    seedDatabase();

    db.runSync(`
      INSERT INTO app_metadata(key, value)
      VALUES('seeded', '1')
    `);
  }
}

export function rebuildAppDatabase() {
  // Only rebuild album data.
  // Keep app_metadata because it contains application settings.

  db.execSync(`
    DROP TABLE IF EXISTS stickers;
    DROP TABLE IF EXISTS teams;
    DROP TABLE IF EXISTS sections;
  `);

  // Recreate album tables
  initializeDatabase();

  // Run migrations
  runMigrations();

  // Re-seed original album data
  seedDatabase();

  // Reset only the database seed marker
  db.runSync(`
    INSERT INTO app_metadata(key, value)
    VALUES('seeded', '1')
    ON CONFLICT(key)
    DO UPDATE SET value = excluded.value
  `);

  console.log("Database rebuilt successfully.");
}
