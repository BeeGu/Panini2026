import db from "./db";
import { initializeDatabase } from "./schema";
import { runMigrations } from "./migrations";
import { seedDatabase } from "./seed";

export function initializeAppDatabase() {

    db.execSync("DROP TABLE IF EXISTS stickers;");
    db.execSync("DROP TABLE IF EXISTS teams;");
    db.execSync("DROP TABLE IF EXISTS sections;");

    initializeDatabase();

    // runMigrations();

    seedDatabase();

    console.log("✅ Database recreated");

}