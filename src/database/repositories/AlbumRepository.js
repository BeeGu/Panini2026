import db from "../db";

const SELECT_ALBUM = `
    SELECT
        sec.id AS section_id,
        sec.code AS section_code,
        sec.name AS section_name,
        sec.sort_order AS section_order,

        t.id AS team_id,
        t.code AS team_code,
        t.name AS team_name,
        t.sort_order AS team_order,

        s.id,
        s.code,
        s.number,
        s.name,
        s.owned,
        s.duplicates,
        s.notes

    FROM stickers s
    INNER JOIN teams t
        ON s.team_id = t.id
    INNER JOIN sections sec
        ON t.section_id = sec.id
`;

const AlbumRepository = {

    findAll() {

        return db.getAllSync(`
            ${SELECT_ALBUM}
            ORDER BY
                sec.sort_order,
                t.sort_order,
                s.number
        `);

    },

    findBySection(sectionId) {

        return db.getAllSync(`
            ${SELECT_ALBUM}
            WHERE sec.id = ?
            ORDER BY
                t.sort_order,
                s.number
        `, [sectionId]);

    },

    findByTeam(teamId) {

        return db.getAllSync(`
            ${SELECT_ALBUM}
            WHERE t.id = ?
            ORDER BY s.number
        `, [teamId]);

    },

    search(term) {

        const value = `%${term}%`;

        return db.getAllSync(`
            ${SELECT_ALBUM}
            WHERE
                s.name LIKE ?
                OR
                t.name LIKE ?
                OR
                sec.name LIKE ?
                OR
                CAST(s.number AS TEXT) LIKE ?
            ORDER BY
                sec.sort_order,
                t.sort_order,
                s.number
        `, [value, value, value, value]);

    },

    getDashboard() {
        return db.getFirstSync(`
            SELECT
                COUNT(*) total,
                SUM(owned) owned,
                SUM(duplicates) duplicates,
                COUNT(*) - SUM(owned) missing
            FROM stickers
        `);

    },

    getCompletionBySection() {
        return db.getAllSync(`
            SELECT
                sec.id,
                sec.name,
                COUNT(*) total,
                SUM(s.owned) owned
            FROM sections sec
            INNER JOIN teams t
                ON sec.id = t.section_id
            INNER JOIN stickers s
                ON t.id = s.team_id
            GROUP BY sec.id
            ORDER BY sec.sort_order
        `);
    },

    getCompletionByTeam() {
        return db.getAllSync(`
            SELECT
                t.id,
                t.name,
                COUNT(*) total,
                SUM(s.owned) owned
            FROM teams t
            INNER JOIN stickers s
                ON t.id = s.team_id
            GROUP BY t.id
            ORDER BY t.sort_order
        `);
    },

    findRecent(limit = 5) {
  
      return db.getAllSync(
          `
          SELECT
              s.id,
              s.number,
              s.name,
              t.name AS team,
              s.updated_at
          FROM stickers s
          JOIN teams t
              ON t.id = s.team_id
          WHERE s.owned = 1
          ORDER BY s.updated_at DESC
          LIMIT ?
          `,
          [limit]
      );
  
    }

};

export default AlbumRepository;