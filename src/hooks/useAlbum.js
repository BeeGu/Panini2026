// src/hooks/useAlbum.js

import { useContext } from "react";

import AlbumContext from "../context/AlbumContext";

export default function useAlbum() {
    return useContext(AlbumContext);
}
