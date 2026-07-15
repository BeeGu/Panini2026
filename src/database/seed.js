import db from "./db";
import sections from "../data/sections.json";
import teams from "../data/teams.json";
import album from "../data/album.json";

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
        sections.forEach(section => {
            stmt.executeSync([
                section.code,
                section.name,
                section.sort_order,
            ]);
        });
    } finally {
        stmt.finalizeSync();
    }
}

function seedTeams() {

    const sectionMap = new Map();

    db.getAllSync(`
        SELECT id, code
        FROM sections
    `).forEach(section => {
        sectionMap.set(
            section.code,
            section.id
        );
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
        teams.forEach(team => {
            stmt.executeSync([
                sectionMap.get(
                    team.section_code
                ),

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

    const teamMap = new Map();

    db.getAllSync(`
        SELECT id, code
        FROM teams
    `).forEach(team => {

        teamMap.set(
            team.code,
            team.id
        );

    });

    const stmt = db.prepareSync(`
        INSERT INTO stickers(
            team_id,
            code,
            number,
            name
        )
        VALUES (?, ?, ?, ?)
    `);

    try {
        album.forEach(sticker => {
            stmt.executeSync([
                sticker.team_code
                    ? teamMap.get(sticker.team_code)
                    : null,
                sticker.code,
                sticker.number,
                sticker.name,
            ]);
        });
    } finally {
        stmt.finalizeSync();
    }
}

export function seedDatabase() {

    console.log("🌱 Seeding database...");
    db.execSync("BEGIN TRANSACTION");

    try {
        seedSections();
        seedTeams();
        seedStickers();

        db.execSync("COMMIT");

        console.log("✅ Database seeded");

    } catch (error) {
        db.execSync("ROLLBACK");
        throw error;
    }

}