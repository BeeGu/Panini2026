import { FILTERS } from "../constants/filters";

export default function filterStickers(
    stickers,
    search = "",
    filter = FILTERS.ALL,
) {

    let result = [...stickers];

    switch (filter) {

        case FILTERS.MISSING:
            result = result.filter(sticker => !sticker.owned);
            break;

        case FILTERS.OWNED:
            result = result.filter(sticker => sticker.owned);
            break;

        case FILTERS.DUPLICATES:
            result = result.filter(sticker => sticker.duplicates > 0);
            break;

        default:
            break;
    }

    const term = search.trim().toLowerCase();

    if (!term) {
        return result;
    }

    // Search by sticker number
    if (/^\d+$/.test(term)) {

        return result.filter(
            sticker =>
                sticker.number === Number(term)
                ||
                sticker.code?.toLowerCase() === term
        );

    }

    // Search by name/team/code
    return result.filter(sticker =>

        sticker.name?.toLowerCase().includes(term)

        ||

        sticker.team?.toLowerCase().includes(term)

        ||

        sticker.code?.toLowerCase().includes(term)

    );

}