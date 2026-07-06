import { useEffect, useMemo, useState } from "react";

import { FILTERS } from "../constants/filters";
import {
    getAll,
    toggleOwned,
} from "../database/repositories/StickerRepository";

export default function useAlbum() {

    const [stickers, setStickers] = useState([]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState(FILTERS.ALL);

    useEffect(() => {
        loadStickers();
    }, []);

    function loadStickers() {
        setStickers(getAll());
    }

    function toggleSticker(id) {
        toggleOwned(id);
        loadStickers();
    }

    const stats = useMemo(() => ({

        total: stickers.length,

        owned: stickers.filter(s => s.owned).length,

        missing: stickers.filter(s => !s.owned).length,

        duplicates: stickers.filter(s => s.duplicates > 0).length,

    }), [stickers]);

    const filteredStickers = useMemo(() => {

        let result = [...stickers];

        switch (filter) {

            case FILTERS.MISSING:
                result = result.filter(s => !s.owned);
                break;

            case FILTERS.OWNED:
                result = result.filter(s => s.owned);
                break;

            case FILTERS.DUPLICATES:
                result = result.filter(s => s.duplicates > 0);
                break;
        }

        if (search.trim()) {

            if (/^\d+$/.test(search)) {

                result = result.filter(
                    s => s.number === Number(search)
                );

            } else {

                const term = search.toLowerCase();

                result = result.filter(s =>

                    s.name?.toLowerCase().includes(term)

                    ||

                    s.team?.toLowerCase().includes(term)

                );

            }

        }

        return result;

    }, [stickers, search, filter]);

    return {

        stickers: filteredStickers,

        stats,

        search,
        setSearch,

        filter,
        setFilter,

        toggleSticker,

    };

}