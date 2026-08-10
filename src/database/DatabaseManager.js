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
            INSERT INTO app_metadata(key,value)
            VALUES('seeded','1')
        `);
    // ⚠️ dacă mai târziu vrei să schimbi seed-ul:
    // INSERT INTO app_metadata(key,value)
    // VALUES('seed_version','2')
    console.log("✅ Database seeded");
  }
}
