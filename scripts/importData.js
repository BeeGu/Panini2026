const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const DATA_DIR = path.join(__dirname, "../data_for_import");
const OUTPUT_DIR = path.join(__dirname, "../src/data");

function readExcel(fileName) {
  const workbook = XLSX.readFile(path.join(DATA_DIR, fileName));

  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  return XLSX.utils.sheet_to_json(sheet, {
    defval: null,
  });
}

function validateSections(sections) {
  const codes = new Set();

  sections.forEach((section) => {
    if (!section.code) {
      throw new Error("Section without code");
    }

    if (codes.has(section.code)) {
      throw new Error(`Duplicate section '${section.code}'`);
    }

    codes.add(section.code);
  });
}

function validateTeams(teams, sections) {
  const sectionCodes = new Set(sections.map((s) => s.code));

  const teamCodes = new Set();

  teams.forEach((team) => {
    if (!sectionCodes.has(team.section_code)) {
      throw new Error(
        `Team ${team.code} references unknown section '${team.section_code}'`,
      );
    }

    if (teamCodes.has(team.code)) {
      throw new Error(`Duplicate team '${team.code}'`);
    }

    if (!team.iso2) {
      throw new Error(`Team ${team.code} has no ISO2`);
    }

    teamCodes.add(team.code);
  });
}

function validateAlbum(stickers, sections, teams) {
  const sectionCodes = new Set(sections.map((s) => s.code));

  const teamCodes = new Set(teams.map((t) => t.code));

  stickers.forEach((sticker) => {
    // secțiunea trebuie să existe întotdeauna
    if (!sectionCodes.has(sticker.section_code)) {
      throw new Error(
        `Sticker '${sticker.code}' references unknown section '${sticker.section_code}'`,
      );
    }

    // echipa este opțională
    if (sticker.team_code && !teamCodes.has(sticker.team_code)) {
      throw new Error(
        `Sticker '${sticker.code}' references unknown team '${sticker.team_code}'`,
      );
    }
  });
}

function writeJson(fileName, data) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, {
      recursive: true,
    });
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, fileName),
    JSON.stringify(data, null, 2),
    "utf8",
  );

  console.log("✔", fileName);
}

console.log("");
console.log("=================================");
console.log(" Panini Import");
console.log("=================================");
console.log("");

const sections = readExcel("sections.xlsx");
const teams = readExcel("teams.xlsx");
const stickers = readExcel("album.xlsx");

validateSections(sections);
validateTeams(teams, sections);
validateAlbum(stickers, sections, teams);

writeJson("sections.json", sections);
writeJson("teams.json", teams);
writeJson("album.json", stickers);

console.log("");
console.log("Finished.");
