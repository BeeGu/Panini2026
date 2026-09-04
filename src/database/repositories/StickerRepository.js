import db from "../db";

const SELECT_STICKERS = `
  SELECT
    s.id,
    s.code,
    s.number,
    s.name,
    s.type,

    s.owned,
    s.duplicates,
    s.notes,
    s.obtained_at,
    s.updated_at,

    s.section_id,
    sec.code AS section_code,
    sec.name AS section,
    sec.sort_order AS section_sort_order,

    t.id AS team_id,
    t.code AS team_code,
    t.iso2 AS team_iso2,
    t.name AS team

  FROM stickers s

  LEFT JOIN sections sec
    ON s.section_id = sec.id

  LEFT JOIN teams t
    ON s.team_id = t.id
`;

const TYPE_ORDER = `
  CASE s.type
    WHEN 'regular' THEN 1
    WHEN 'bronze' THEN 2
    WHEN 'silver' THEN 3
    WHEN 'gold' THEN 4
    ELSE 99
  END
`;

const StickerRepository = {
  findAll() {
    return db.getAllSync(`
      ${SELECT_STICKERS}
      -- WHERE s.type = "regular"
      ORDER BY
        ${TYPE_ORDER},
        s.number,
        s.id
    `);
  },

  findById(id) {
    return db.getFirstSync(
      `
        ${SELECT_STICKERS}
        WHERE s.id = ?
      `,
      [id],
    );
  },

  findByNumber(number, type = "regular") {
    return db.getFirstSync(
      `
        ${SELECT_STICKERS}
        WHERE
          s.number = ?
          AND s.type = ?
      `,
      [number, type],
    );
  },

  findByTeam(teamId) {
    return db.getAllSync(
      `
        ${SELECT_STICKERS}
        WHERE s.team_id = ?
        ORDER BY
          ${TYPE_ORDER},
          s.number
      `,
      [teamId],
    );
  },

  findBySection(sectionId) {
    return db.getAllSync(
      `
        ${SELECT_STICKERS}
        WHERE s.section_id = ?
        ORDER BY
          ${TYPE_ORDER},
          s.number,
          s.id
      `,
      [sectionId],
    );
  },

  search(term) {
    const value = `%${term}%`;

    return db.getAllSync(
      `
        ${SELECT_STICKERS}
        WHERE
          s.name LIKE ?
          OR t.name LIKE ?
          OR CAST(s.number AS TEXT) LIKE ?
          OR s.code LIKE ?
        ORDER BY
          ${TYPE_ORDER},
          s.number,
          s.id
      `,
      [value, value, value, value],
    );
  },

  update(sticker) {
    db.runSync(
      `
        UPDATE stickers
        SET
          code = ?,
          number = ?,
          name = ?,
          type = ?,
          section_id = ?,
          team_id = ?,
          owned = ?,
          duplicates = ?,
          notes = ?,
          updated_at = datetime('now')
        WHERE id = ?
      `,
      [
        sticker.code,
        sticker.number,
        sticker.name,
        sticker.type,
        sticker.section_id,
        sticker.team_id,
        sticker.owned ? 1 : 0,
        sticker.duplicates,
        sticker.notes,
        sticker.id,
      ],
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
      [owned ? 1 : 0, now, owned ? 1 : 0, now, id],
    );
  },

  setDuplicates(id, duplicates) {
    db.runSync(
      `
        UPDATE stickers
        SET duplicates = ?
        WHERE id = ?
      `,
      [duplicates, id],
    );
  },

  incrementDuplicates(id) {
    db.runSync(
      `
      UPDATE stickers
      SET duplicates = duplicates + 1
      WHERE id = ?
    `,
      [id],
    );
  },

  decrementDuplicates(id) {
    db.runSync(
      `
      UPDATE stickers
      SET duplicates =
        CASE
          WHEN duplicates > 0
          THEN duplicates - 1
          ELSE 0
        END
      WHERE id = ?
    `,
      [id],
    );
  },

  updateNotes(id, notes) {
    db.runSync(
      `
        UPDATE stickers
        SET
          notes = ?,
          updated_at = datetime('now')
        WHERE id = ?
      `,
      [notes, id],
    );
  },

  resetCollection() {
    db.runSync(`
      UPDATE stickers
      SET
        owned = 0,
        duplicates = 0,
        notes = NULL,
        obtained_at = NULL,
        updated_at = NULL
    `);
  },

  getStatistics() {
    return db.getFirstSync(`
      SELECT
        COUNT(*) AS total,
        COALESCE(SUM(owned), 0) AS owned,
        COALESCE(SUM(duplicates), 0) AS duplicates
      FROM stickers
    `);
  },

  findDuplicates() {
    return db.getAllSync(`
      ${SELECT_STICKERS}
      WHERE s.duplicates > 0
      ORDER BY
        s.duplicates DESC,
        ${TYPE_ORDER},
        s.number
    `);
  },

  findMissing() {
    return db.getAllSync(`
      ${SELECT_STICKERS}
      WHERE s.owned = 0
      ORDER BY
        ${TYPE_ORDER},
        s.number,
        s.id
    `);
  },

  count() {
    return db.getFirstSync(`
      SELECT COUNT(*) AS total
      FROM stickers
    `).total;
  },

  getByIdForEdit(id) {
    return db.getFirstSync(
      `
        SELECT
          s.*,

          sec.code AS section_code,
          sec.name AS section,

          t.code AS team_code,
          t.name AS team,
          t.iso2 AS team_iso2

        FROM stickers s

        LEFT JOIN sections sec
          ON sec.id = s.section_id

        LEFT JOIN teams t
          ON t.id = s.team_id

        WHERE s.id = ?
      `,
      [id],
    );
  },
};

export default StickerRepository;
