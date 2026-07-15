// src/hooks/useSticker.js

import { useEffect, useState } from "react";
import AlbumService from "../services/AlbumService";

export default function useSticker(id) {
    const [sticker, setSticker] = useState(null);

    useEffect(() => {
        load();
    }, [id]);

    function load() {

        setSticker(
            AlbumService.getSticker(id)
        );

    }

    return {
        sticker,
        reload: load,
    };

}