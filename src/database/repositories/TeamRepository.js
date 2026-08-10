import db from "../db";

const TeamRepository = {

    findAll() {
        return db.getAllSync(`
            SELECT *
            FROM teams
            ORDER BY sort_order
        `);
    },

    findById(id) {
        return db.getFirstSync(
            "SELECT * FROM teams WHERE id=?",
            [id]
        );
    },

    findBySection(sectionId) {
        return db.getAllSync(`
            SELECT *
            FROM teams
            WHERE section_id=?
            ORDER BY sort_order
        `, [sectionId]);
    },

    findByCode(code) {
        return db.getFirstSync(
            "SELECT * FROM teams WHERE code=?",
            [code]
        );
    },

};


/*
const TeamRepository = {

    getAll() {

        return db.getAllSync(`
            SELECT *
            FROM teams
            ORDER BY sort_order
        `);

    },

    getById(id) {

        return db.getFirstSync(`
            SELECT *
            FROM teams
            WHERE id = ?
        `, [id]);

    },

    getByCode(code) {

        return db.getFirstSync(`
            SELECT *
            FROM teams
            WHERE code = ?
        `, [code]);

    },

    getBySection(sectionId) {

        return db.getAllSync(`
            SELECT *
            FROM teams
            WHERE section_id = ?
            ORDER BY sort_order
        `, [sectionId]);

    },

};
*/
export default TeamRepository;