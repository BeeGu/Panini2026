import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("panini2026.db");

export default db;