import db from "../db";

const SectionRepository = {

    findAll() {
        return db.getAllSync(`
            SELECT *
            FROM sections
            ORDER BY sort_order
        `);
    },

    findById(id) {
        return db.getFirstSync(
            "SELECT * FROM sections WHERE id=?",
            [id]
        );
    },

    findByCode(code) {
        return db.getFirstSync(
            "SELECT * FROM sections WHERE code=?",
            [code]
        );
    },
};


/*
const SectionRepository = {

    getAll() {

        return db.getAllSync(`
            SELECT *
            FROM sections
            ORDER BY sort_order
        `);

    },

    getById(id) {

        return db.getFirstSync(`
            SELECT *
            FROM sections
            WHERE id = ?
        `, [id]);

    },

    getByCode(code) {

        return db.getFirstSync(`
            SELECT *
            FROM sections
            WHERE code = ?
        `, [code]);

    },

};
*/
export default SectionRepository;