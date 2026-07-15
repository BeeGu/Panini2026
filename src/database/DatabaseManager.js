import db from "./db";
import { initializeDatabase } from "./schema";
import { runMigrations } from "./migrations";
import { seedDatabase } from "./seed";
/*
export function initializeAppDatabase() {

    db.execSync("DROP TABLE IF EXISTS stickers;");
    db.execSync("DROP TABLE IF EXISTS teams;");
    db.execSync("DROP TABLE IF EXISTS sections;");

    initializeDatabase();

    runMigrations();

    seedDatabase();

    console.log("✅ Database recreated");

    console.log(
        db.getFirstSync("SELECT COUNT(*) total FROM sections")
    );
    
    console.log(
        db.getFirstSync("SELECT COUNT(*) total FROM teams")
    );
    
    console.log(
        db.getFirstSync("SELECT COUNT(*) total FROM stickers")
    );

}
*/

export function initializeAppDatabase() {

    // create tables if missing
    initializeDatabase();

    // update schema if needed
    runMigrations();

    // seed only first time
    // const result = db.getFirstSync(
    //     "SELECT COUNT(*) as count FROM stickers"
    // );

    // if (!result || result.count === 0) {
    //     seedDatabase();
    //     console.log("✅ Database seeded");
    // }


    const seeded = db.getFirstSync(
        "SELECT value FROM app_metadata WHERE key='seeded'"
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