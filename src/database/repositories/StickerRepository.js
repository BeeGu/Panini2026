import db from "../db";

const SELECT_STICKERS = `
    SELECT
        s.id,
        s.code,
        s.number,
        s.name,
        s.owned,
        s.duplicates,
        s.notes,

        t.id AS team_id,
        t.code AS team_code,
        t.iso2 AS team_iso2,
        t.name AS team,

        sec.id AS section_id,
        sec.code AS section_code,
        sec.name AS section

    FROM stickers s

    INNER JOIN teams t
        ON s.team_id = t.id

    INNER JOIN sections sec
        ON t.section_id = sec.id
`;

const StickerRepository = {

    findAll() {
        return db.getAllSync(`
            ${SELECT_STICKERS}
            ORDER BY s.number
        `);
    },

    findById(id) {
        return db.getFirstSync(`
            ${SELECT_STICKERS}
            WHERE s.id = ?
        `, [id]);
    },

    findByNumber(number) {
        return db.getFirstSync(`
            ${SELECT_STICKERS}
            WHERE s.number = ?
        `, [number]);
    },

    findByTeam(teamId) {
        return db.getAllSync(`
            ${SELECT_STICKERS}
            WHERE s.team_id = ?
            ORDER BY s.number
        `, [teamId]);
    },

    findBySection(sectionId) {
        return db.getAllSync(`
            ${SELECT_STICKERS}
            WHERE sec.id = ?
            ORDER BY s.number
        `, [sectionId]);
    },

    search(term) {

        const value = `%${term}%`;

        return db.getAllSync(`
            ${SELECT_STICKERS}
            WHERE
                s.name LIKE ?
                OR t.name LIKE ?
                OR CAST(s.number AS TEXT) LIKE ?
            ORDER BY s.number
        `, [value, value, value]);

    },

    update(sticker) {
    
        db.runSync(
            `
            UPDATE stickers
            SET
                code = ?,
                number = ?,
                name = ?,
                team_id = ?,
                owned = ?,
                duplicates = ?,
                notes = ?
            WHERE id = ?
            `,
            [
                sticker.code,
                sticker.number,
                sticker.name,
                sticker.team_id,
                sticker.owned,
                sticker.duplicates,
                sticker.notes,
                sticker.id,
            ]
        );
    
    },
  
    updateOwned(id, owned) {
  
      const now = new Date().toISOString();
  
      db.runSync(
          `
          UPDATE stickers
          SET
              owned = ?,
              updated_at = ?,
              obtained_at = CASE
                  WHEN ? = 1 AND obtained_at IS NULL
                  THEN ?
                  ELSE obtained_at
              END
          WHERE id = ?
          `,
          [
              owned,
              now,
              owned,
              now,
              id,
          ]
      );
  
    },

    setDuplicates(id, duplicates) {

        db.runSync(
            "UPDATE stickers SET duplicates=? WHERE id=?",
            [duplicates, id]
        );

    },

    incrementDuplicates(id) {
    
        db.runSync(`
            UPDATE stickers
            SET duplicates = duplicates + 1
            WHERE id = ?
        `, [id]);
    
    },

    decrementDuplicates(id) {
    
        db.runSync(`
            UPDATE stickers
            SET duplicates =
                CASE
                    WHEN duplicates > 0
                    THEN duplicates - 1
                    ELSE 0
                END
            WHERE id = ?
        `, [id]);
    
    },
  
    updateNotes(id, notes) {

        db.runSync(
            "UPDATE stickers SET notes=? WHERE id=?",
            [notes, id]
        );

    },

    resetCollection() {

        db.runSync(`
            UPDATE stickers
            SET
                owned = 0,
                duplicates = 0,
                notes = NULL
        `);

    },

    getStatistics() {

        return db.getFirstSync(`
            SELECT
                COUNT(*) total,
                SUM(owned) owned,
                SUM(duplicates) duplicates
            FROM stickers
        `);

    },

    // Trade
    findDuplicates() {
    
        return db.getAllSync(`
            ${SELECT_STICKERS}
            WHERE s.duplicates > 0
            ORDER BY
                s.duplicates DESC,
                s.number
        `);
    
    },

    findMissing() {
    
        return db.getAllSync(`
            ${SELECT_STICKERS}
            WHERE s.owned = 0
            ORDER BY s.number
        `);
    
    },

    // settings
    count() {
  
      return db.getFirstSync(`
          SELECT COUNT(*) AS total
          FROM stickers
      `).total;
  
    },
  
};

export default StickerRepository;