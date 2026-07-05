import db from "../db";

export function getAllStickers() {

    return db.getAllSync(
        "SELECT * FROM stickers ORDER BY number"
    );

}