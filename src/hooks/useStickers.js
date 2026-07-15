// src/hooks/useStickers.js

import { useContext } from "react";
import StickerContext from "../context/StickerContext";

export default function useStickers() {
  return useContext(StickerContext);
}

