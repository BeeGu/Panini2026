import db from "../db";

const TeamRepository = {

    findAll() {

        return db.getAllSync(`
            SELECT *
            FROM teams
            ORDER BY sort_order, name
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
            ORDER BY sort_order, name
        `, [sectionId]);

    },

    findByCode(code) {

        return db.getFirstSync(
            "SELECT * FROM teams WHERE code=?",
            [code]
        );

    },

};

export default TeamRepository;