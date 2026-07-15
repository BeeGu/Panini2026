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

export default SectionRepository;