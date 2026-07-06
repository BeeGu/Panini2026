import db from "./db";

export function initializeDatabaseOld() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS sections (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      sort_order INTEGER
    );
  `);

  db.execSync(`
    CREATE TABLE IF NOT EXISTS teams (
      id INTEGER PRIMARY KEY,
      section_id INTEGER,
      name TEXT NOT NULL,
      code TEXT,
      sort_order INTEGER
    );
  `);

  db.execSync(`
    CREATE TABLE IF NOT EXISTS stickers (
      id INTEGER PRIMARY KEY,
      number INTEGER NOT NULL,
      name TEXT,
      section_id INTEGER,
      team_id INTEGER,
      page INTEGER,
      type TEXT
    );
  `);

  db.execSync(`
    CREATE TABLE IF NOT EXISTS collection (
      sticker_id INTEGER PRIMARY KEY,
      owned INTEGER DEFAULT 0,
      duplicates INTEGER DEFAULT 0,
      obtained_at TEXT
    );
  `);
}

export function initializeDatabase2() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS stickers(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number INTEGER NOT NULL,
            name TEXT,
            team TEXT,
            owned INTEGER DEFAULT 0,
            duplicates INTEGER DEFAULT 0
        );
    `);

}

export function resetDatabaseOld() {

  db.execSync(`
    DROP TABLE IF EXISTS pack_stickers;
  `);

  db.execSync(`
    DROP TABLE IF EXISTS packs;
  `);

  db.execSync(`
    DROP TABLE IF EXISTS collection;
  `);

  db.execSync(`
    DROP TABLE IF EXISTS stickers;
  `);

  db.execSync(`
    DROP TABLE IF EXISTS teams;
  `);

  db.execSync(`
    DROP TABLE IF EXISTS sections;
  `);

  initializeDatabase();
}


export function initializeDatabase() {

    db.execSync(`
        PRAGMA foreign_keys = ON;
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS sections (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            sort_order INTEGER
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            section_id INTEGER NOT NULL,
            code TEXT,
            name TEXT NOT NULL,
            sort_order INTEGER,

            FOREIGN KEY(section_id)
                REFERENCES sections(id)
                ON DELETE CASCADE
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS stickers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER NOT NULL,
            code TEXT UNIQUE,
            number INTEGER NOT NULL,
            name TEXT,
            owned INTEGER DEFAULT 0,
            duplicates INTEGER DEFAULT 0,
            notes TEXT,

            FOREIGN KEY(team_id)
                REFERENCES teams(id)
                ON DELETE CASCADE
        );
    `);

}