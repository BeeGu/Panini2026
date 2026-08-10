import { useEffect, useMemo, useState } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StickerItem from "../components/stickers/StickerItem";

import useTheme from "../hooks/useTheme";
import Spacing from "../theme/spacing";
import Typography from "../theme/typography";

import ScreenHeader from "../components/common/ScreenHeader";
import SearchBar from "../components/common/SearchBar";

import { FILTERS } from "../constants/filters";

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

  const { colors } = useTheme();
  
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
    <SafeAreaView
        edges={["top"]}
        style={[
            styles.container,
            {
                backgroundColor: colors.background,
            },
        ]}
    >

      {/*<AlbumHeader
          owned={stats.owned}
          total={stats.total}
      /> */}

      <ScreenHeader
          title="Album"
          icon="book-outline"
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
  },

  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: Typography.h1,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.body,
  },

  list: {
    // paddingVertical: Spacing.sm,
    // paddingBottom: Spacing.xl,
    flex: 1,
  },
  
});