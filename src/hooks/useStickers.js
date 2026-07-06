/*
import { useEffect, useState } from "react";

import {
  getAll,
  toggleOwned,
} from "../database/repositories/StickerRepository";

export default function useStickers() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    loadStickers();
  }, []);

  function loadStickers() {
    const data = getAll();
    setStickers(data);
  }

  function toggleSticker(id) {
    toggleOwned(id);
    loadStickers();
  }

  const ownedCount = stickers.filter(s => s.owned === 1).length;

  return {
    stickers,
    ownedCount,
    totalCount: stickers.length,
    toggleSticker,
    reload: loadStickers,
  };
}
*/

import { useContext } from "react";
import StickerContext from "../context/StickerContext";

export default function useStickers() {
  return useContext(StickerContext);
}