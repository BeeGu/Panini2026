import { initializeDatabase } from "./schema";
import { runMigrations } from "./migrations";
import { seedDatabase } from "./seed";

export function initializeAppDatabase() {

    initializeDatabase();

    runMigrations();

    seedDatabase();

}