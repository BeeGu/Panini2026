// src/database/seed.js
import db from "./db";
import sections from "./data/sections.json";
import teams from "./data/teams.json";
import album from "./data/album.json";
import extraStickers from "./data/extraStickers.json";

function seedSections() {
  const stmt = db.prepareSync(`
    INSERT INTO sections(
      code,
      name,
      sort_order
    )
    VALUES (?, ?, ?)
  `);

  try {
    sections.forEach((section) => {
      stmt.executeSync([section.code, section.name, section.sort_order]);
    });
  } finally {
    stmt.finalizeSync();
  }
}

function seedTeams() {
  const sectionMap = new Map();

  db.getAllSync(
    `
    SELECT id, code
    FROM sections
  `,
  ).forEach((section) => {
    sectionMap.set(section.code, section.id);
  });

  const stmt = db.prepareSync(`
    INSERT INTO teams(
      section_id,
      code,
      iso2,
      name,
      sort_order
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  try {
    teams.forEach((team) => {
      stmt.executeSync([
        sectionMap.get(team.section_code),
        team.code,
        team.iso2,
        team.name,
        team.sort_order,
      ]);
    });
  } finally {
    stmt.finalizeSync();
  }
}

function seedStickers() {
  const sectionMap = new Map();
  const teamMap = new Map();

  // sections.json -> database section IDs
  db.getAllSync(
    `
    SELECT id, code
    FROM sections
  `,
  ).forEach((section) => {
    sectionMap.set(section.code, section.id);
  });

  // teams.json -> database team IDs
  db.getAllSync(
    `
    SELECT id, code
    FROM teams
  `,
  ).forEach((team) => {
    teamMap.set(team.code, team.id);
  });

  const stmt = db.prepareSync(`
    INSERT INTO stickers(
      section_id,
      team_id,
      code,
      number,
      type,
      name
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    album.forEach((sticker) => {
      const sectionId = sectionMap.get(sticker.section_code);

      const teamId = sticker.team_code ? teamMap.get(sticker.team_code) : null;

      // Important: don't silently insert invalid section_id
      if (!sectionId) {
        throw new Error(
          `Unknown section_code "${sticker.section_code}" for sticker "${sticker.code}"`,
        );
      }

      // team_code is optional for INTRO/HISTORY/etc.
      if (sticker.team_code && !teamId) {
        throw new Error(
          `Unknown team_code "${sticker.team_code}" for sticker "${sticker.code}"`,
        );
      }

      stmt.executeSync([
        sectionId,
        teamId,
        sticker.code,
        sticker.number,
        "regular",
        sticker.name,
      ]);
    });
  } finally {
    stmt.finalizeSync();
  }
}

function seedExtraStickers() {
  const section = db.getFirstSync(`
    SELECT id
    FROM sections
    WHERE code = 'EXTRA'
  `);

  if (!section) {
    throw new Error('Section "EXTRA" was not found.');
  }

  const teamMap = new Map();

  db.getAllSync(
    `
    SELECT id, code
    FROM teams
  `,
  ).forEach((team) => {
    teamMap.set(team.code, team.id);
  });

  const stmt = db.prepareSync(`
    INSERT INTO stickers(
      section_id,
      team_id,
      code,
      number,
      type,
      name
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    const types = ["regular", "bronze", "silver", "gold"];

    extraStickers.forEach((sticker) => {
      const teamId = teamMap.get(sticker.team_code);

      if (!teamId) {
        throw new Error(
          `Unknown team_code "${sticker.team_code}" for extra sticker ${sticker.number}`,
        );
      }

      types.forEach((type) => {
        stmt.executeSync([
          section.id,
          teamId,
          `EXTRA-${sticker.number}-${type.toUpperCase()}`,
          sticker.number,
          type,
          sticker.name,
        ]);
      });
    });
  } finally {
    stmt.finalizeSync();
  }
}

export function seedDatabase() {
  db.execSync("BEGIN TRANSACTION");

  try {
    seedSections();
    seedTeams();
    seedStickers();
    seedExtraStickers();

    db.execSync("COMMIT");
  } catch (error) {
    db.execSync("ROLLBACK");
    throw error;
  }
}
