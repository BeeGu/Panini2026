import { useEffect, useMemo, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StickerItem from "../components/stickers/StickerItem";

import Colors from "../theme/colors";
import Spacing from "../theme/spacing";
import Typography from "../theme/typography";

import SearchBar from "../components/common/SearchBar";

import { FILTERS } from "../constants/filters";
import { ScrollView } from "react-native";
import FilterChip from "../components/common/FilterChip";
import useAlbum from "../hooks/useAlbum";
import SectionHeader from "../components/album/SectionHeader";
import AlbumHeader from "../components/album/AlbumHeader";
import AlbumSearch from "../components/album/AlbumSearch";
import AlbumFilters from "../components/album/AlbumFilters";
import StickerList from "../components/album/StickerList";
import EmptyState from "../components/common/EmptyState";

import TeamList from "../components/album/TeamList";
import SectionList from "../components/album/SectionList";

export default function AlbumScreen() {

  const {
    filteredStickers,
    toggleSticker,
    search,
    setSearch,
    filter,
    setFilter,
    stats,
    
    groupedTeams,
    groupedAlbum,
  } = useAlbum();
  // const album = useAlbum();
  
  const filters = [
      {
          key: FILTERS.ALL,
          title: `All (${stats.total})`,
      },
      {
          key: FILTERS.MISSING,
          title: `Missing (${stats.missing})`,
      },
      {
          key: FILTERS.OWNED,
          title: `Owned (${stats.owned})`,
      },
      {
          key: FILTERS.DUPLICATES,
          title: `Duplicates (${stats.duplicates})`,
      },
  ];
  
  return (
    <SafeAreaView style={styles.container}>

      <AlbumHeader
          owned={stats.owned}
          total={stats.total}
      />

      <AlbumSearch
          value={search}
          onChangeText={setSearch}
      />

      <AlbumFilters
          filter={filter}
          setFilter={setFilter}
          stats={stats}
      />

      {/*<StickerList
          stickers={filteredStickers}
          onToggle={toggleSticker}
          onPress={(sticker) => console.log(sticker)}
          onLongPress={(sticker) => console.log("Edit", sticker)}
      /> */}

      {/* <TeamList
          teams={groupedTeams}
          onToggle={toggleSticker}
      /> */}

      <SectionList
          sections={groupedAlbum}
          onToggle={toggleSticker}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  title: {
    fontSize: Typography.h1,
    fontWeight: "bold",
    color: Colors.primary,
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.body,
    color: Colors.textSecondary,
  },

  list: {
    // paddingVertical: Spacing.sm,
    // paddingBottom: Spacing.xl,
    flex: 1,
  },
  
});