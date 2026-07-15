// src/context/AlbumProvider.js
import { useEffect, useMemo, useState } from "react";
import AlbumContext from "./AlbumContext";
import AlbumService from "../services/AlbumService";
import StatisticsService from "../services/StatisticsService";
import { FILTERS } from "../constants/filters";
import filterStickers from "../utils/filterStickers";
import groupAlbum from "../utils/groupAlbum";

export default function AlbumProvider({ children }) {
    const [stickers, setStickers] = useState([]);
    const [recentActivity, setRecentActivity] = useState([]);
    const [teamProgress, setTeamProgress] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(FILTERS.ALL);

    useEffect(() => {
        reload();
    }, []);

    function reload() {
        const stickers = AlbumService.load();

        setStickers(stickers);

        setRecentActivity(
            AlbumService.getRecentActivity()
        );

        setTeamProgress(
            AlbumService.getTeamProgress()
        );

    }

    function toggleSticker(id) {
        AlbumService.toggleSticker(id);
        reload();
    }

    // ⚠️ toggleSticker <=> updateSticker
    function updateSticker(data) {
        AlbumService.updateSticker(data);
        reload();
    }

    function updateDuplicates(id, duplicates) {
        AlbumService.updateDuplicates(id, duplicates);
        reload();
    }

    function addDuplicate(id) {
        AlbumService.addDuplicate(id);
        reload();
    }

    function removeDuplicate(id) {
        AlbumService.removeDuplicate(id);
        reload();
    }
  
    function updateNotes(id, notes) {
        AlbumService.updateNotes(id, notes);
        reload();
    }

    const stats = useMemo(() => {
        return StatisticsService.calculateAlbum(
            stickers
        );
    }, [stickers]);

    const filteredStickers = useMemo(() => {
        return filterStickers(
            stickers,
            search,
            filter,
        );
    }, [stickers, search, filter]);

    // function getSticker(id) {
    //   return stickers.find(
    //       sticker => sticker.id === id
    //   );
    // }

    const stickerMap = useMemo(() => {
        return new Map(
            stickers.map(s => [s.id, s])
        );
    
    }, [stickers]);
    
    function getSticker(id) {
        return stickerMap.get(id);
    }

    function getTeam(id) {
        return AlbumService
            .getTeams()
            .find(team => team.id === id);
    }

    function getSection(id) {
        return AlbumService
            .getSections()
            .find(section => section.id === id);
    }

const groupedTeams = useMemo(() => {

    const teams = AlbumService.getTeams();

    return teams.map(team => {

        const teamStickers = filteredStickers.filter(
            s => s.team_id === team.id
        );

        return {

            team,

            stickers: teamStickers,

            owned: teamStickers.filter(s => s.owned).length,

            total: teamStickers.length,

        };

    });

}, [filteredStickers]);

const groupedAlbum = useMemo(() => {

    return groupAlbum(filteredStickers);

}, [filteredStickers]);
  
    return (
        <AlbumContext.Provider
            value={{
                // -----------------------------
                // State
                // -----------------------------
                stickers,
                filteredStickers,
                stats,
                recentActivity,
                teamProgress,
        
                // -----------------------------
                // Queries
                // -----------------------------
                getSticker,
                getTeam,
                getSection,
        
                // -----------------------------
                // Commands
                // -----------------------------
                toggleSticker,
                updateSticker,
                updateDuplicates,
                addDuplicate,
                removeDuplicate,
                updateNotes,
                reload,
        
                // -----------------------------
                // UI State
                // -----------------------------
                search,
                setSearch,
                filter,
                setFilter,

                groupedTeams,
                groupedAlbum,
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
}





