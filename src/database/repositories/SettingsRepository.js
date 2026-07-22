import db from "../db";

const SettingsRepository = {

    get(key) {

        const row = db.getFirstSync(
            "SELECT value FROM app_metadata WHERE key = ?",
            [key]
        );

        return row?.value ?? null;

    },

    set(key, value) {

        db.runSync(
            `
            INSERT INTO app_metadata(key, value)
            VALUES(?, ?)
            ON CONFLICT(key)
            DO UPDATE SET value = excluded.value
            `,
            [
                key,
                String(value),
            ]
        );

    },

    getBoolean(key) {
        return this.get(key) === "1";
    },

    setBoolean(key, value) {
        this.set(
            key,
            value ? "1" : "0"
        );
    },

};

export default SettingsRepository;