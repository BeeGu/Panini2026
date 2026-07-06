import db from "./db";
import stickers from "./data/worldcup2026";

/*
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
*/

/*
stickers.forEach(sticker => {

    db.runSync(

        `INSERT INTO stickers
        (number,name,team)
        VALUES(?,?,?)`,

        [
            sticker.number,
            sticker.name,
            sticker.team,
        ]

    );

});
*/


export function seedDatabase() {

    const count = db.getFirstSync(
        "SELECT COUNT(*) AS total FROM stickers"
    );

    if (count.total > 0) {
        return;
    }

    const statement = db.prepareSync(`
        INSERT INTO stickers
        (
            number,
            code,
            name,
            team,
            section,
            page,
            type
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    try {

        for (const sticker of stickers) {

            statement.executeSync([
                sticker.number,
                sticker.code,
                sticker.name,
                sticker.team,
                sticker.section,
                sticker.page,
                sticker.type,
            ]);

        }

    } finally {

        statement.finalizeSync();

    }
}