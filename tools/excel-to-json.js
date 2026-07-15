// node tools/excel-to-json.js
console.log("⭐️ Excel import tool");
/*
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const workbook = XLSX.readFile(
    // path.join(__dirname, "../Panini_FIFA_World_Cup_2026_Album_Avansat(1).xlsx")
    path.join(__dirname, "../Panini_FIFA_World_Cup_2026_Album_Avansat.xlsx")
);

const sheet = workbook.Sheets["Album"];

const rows = XLSX.utils.sheet_to_json(sheet);

console.log("Rows:", rows.length);

console.log(rows.slice(0,5));
*/

const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const excelFile = path.join(
    __dirname,
    "..",
    "Panini_FIFA_World_Cup_2026_Album_Avansat.xlsx"
);

const workbook = XLSX.readFile(excelFile);

const sheet = workbook.Sheets["Album"];

const rows = XLSX.utils.sheet_to_json(sheet, {
    defval: "",
});

const sections = new Map();

for (const row of rows) {

    const sectionName = row.section || "Unknown";
    const teamName = row.team || "Unknown";

    if (!sections.has(sectionName)) {
        sections.set(sectionName, {
            name: sectionName,
            teams: new Map(),
        });
    }

    const section = sections.get(sectionName);

    if (!section.teams.has(teamName)) {
        section.teams.set(teamName, {
            code: teamName
                .toUpperCase()
                .replace(/\s+/g, "_"),
            name: teamName,
            stickers: [],
        });

    }

    section.teams.get(teamName).stickers.push({
        code: row.code,
        number: row.number,
        page: row.page,
        name: row.name,
    });

}

const album = {
    version: 1,
    generated: new Date().toISOString(),
    sections: [...sections.values()].map(section => ({
        ...section,
        teams: [...section.teams.values()],
    })),
};

const output = path.join(
    __dirname,
    "..",
    "src",
    "database",
    "data",
    "album.json"
);

fs.writeFileSync(
    output,
    JSON.stringify(album, null, 2),
    "utf8"
);

console.log("✅ album.json generated");
console.log("Sections:", album.sections.length);
console.log(
    "Teams:",
    album.sections.reduce(
        (n, s) => n + s.teams.length,
        0
    )
);
console.log("Stickers:", rows.length);