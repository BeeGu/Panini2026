import { useEffect, useState } from "react";
import StickerContext from "./StickerContext";

// import {
//   getAll,
//   toggleOwned,
// } from "../database/repositories/StickerRepository";
import StickerRepository from "../database/repositories/StickerRepository";

export default function StickerProvider({ children }) {

  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    loadStickers();
  }, []);

  function loadStickers() {
    // setStickers(getAll());
    setStickers(StickerRepository.getAll());
  }

  function toggleSticker(id) {
    // toggleOwned(id);
    StickerRepository.toggleOwned(id);
    loadStickers();
  }

  const ownedCount = stickers.filter(s => s.owned).length;

  return (
    <StickerContext.Provider
      value={{
        stickers,
        ownedCount,
        totalCount: stickers.length,
        toggleSticker,
        reload: loadStickers,
      }}
    >
      {children}
    </StickerContext.Provider>
  );
}