export default function groupAlbum(stickers) {

    const sectionsMap = new Map();

    stickers.forEach(sticker => {

        let section = sectionsMap.get(sticker.section_id);

        if (!section) {

            section = {
                id: sticker.section_id,
                code: sticker.section_code,
                name: sticker.section,
                teams: new Map(),
            };

            sectionsMap.set(section.id, section);

        }

        let team = section.teams.get(sticker.team_id);

        if (!team) {

            team = {
                id: sticker.team_id,
                code: sticker.team_code,
                iso2: sticker.team_iso2,
                name: sticker.team,
                stickers: [],
                owned: 0,
                total: 0,
            };

            section.teams.set(team.id, team);

        }

        team.stickers.push(sticker);
        team.total++;

        if (sticker.owned)
            team.owned++;

    });

    return [...sectionsMap.values()]
        .map(section => {

            const teams = [...section.teams.values()];

            return {

                id: section.id,
                code: section.code,
                name: section.name,

                owned: teams.reduce(
                    (s, t) => s + t.owned,
                    0
                ),

                total: teams.reduce(
                    (s, t) => s + t.total,
                    0
                ),

                teams,

            };

        });

}