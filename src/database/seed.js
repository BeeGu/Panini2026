import db from "./db";

// Acesta va introduce câteva stickere de test.
export function seedDatabase() {

    const count = db.getFirstSync(
        "SELECT COUNT(*) as total FROM stickers"
    );

    if (count.total > 0) {
        return;
    }

    db.runSync(
        `
        INSERT INTO stickers(number,name,team)
        VALUES
        (1,'Official Emblem','FIFA'),
        (2,'Official Ball','FIFA'),
        (3,'Ianis Hagi','Romania'),
        (4,'Nicolae Stanciu','Romania'),
        (5,'Lionel Messi','Argentina');
        `
    );

}