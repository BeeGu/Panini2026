export default function groupBySectionAndTeam(stickers) {

    const sectionsMap = new Map();

    stickers.forEach(sticker => {

        let section = sectionsMap.get(sticker.section_id);

        if (!section) {

            section = {

                id: sticker.section_id,
                code: sticker.section_code,
                name: sticker.section,

                teams: new Map(),

                owned: 0,
                missing: 0,
                duplicates: 0,
                total: 0,

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
                missing: 0,
                duplicates: 0,
                total: 0,

            };

            section.teams.set(team.id, team);

        }

        team.stickers.push(sticker);

        team.total++;
        section.total++;

        if (sticker.owned) {

            team.owned++;
            section.owned++;

        } else {

            team.missing++;
            section.missing++;

        }

        if (sticker.duplicates > 0) {

            team.duplicates += sticker.duplicates;
            section.duplicates += sticker.duplicates;

        }

    });

    return [...sectionsMap.values()].map(section => ({

        ...section,

        teams: [...section.teams.values()],

    }));

}