import db from "./db";

export function initializeDatabase() {

    db.execSync(`
        PRAGMA foreign_keys = ON;
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS app_metadata (
            key TEXT PRIMARY KEY,
            value TEXT
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS sections (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            code TEXT,
            sort_order INTEGER
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            section_id INTEGER NOT NULL,
            code TEXT NOT NULL UNIQUE,
            iso2 TEXT NOT NULL,
            name TEXT NOT NULL,
            sort_order INTEGER,
    
            FOREIGN KEY(section_id)
                REFERENCES sections(id)
                ON DELETE CASCADE
        );
    `);

            // team_id INTEGER NOT NULL,
    db.execSync(`
        CREATE TABLE IF NOT EXISTS stickers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER NULL,
            code TEXT UNIQUE,
            number INTEGER NOT NULL,
            name TEXT,
            owned INTEGER DEFAULT 0,
            duplicates INTEGER DEFAULT 0,
            notes TEXT,
            obtained_at TEXT,
            updated_at TEXT,

            FOREIGN KEY(team_id)
                REFERENCES teams(id)
                ON DELETE CASCADE
        );
    `);

}