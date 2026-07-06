import { useEffect, useMemo, useState } from "react";
import { FlatList, View, Text, SectionList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StickerItem from "../components/stickers/StickerItem";
import useStickers from "../hooks/useStickers";

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
import EmptyState from "../components/common/EmptyState";

export default function AlbumScreen() {

  // const {
  //   stickers,
  //   ownedCount,
  //   totalCount,
  //   toggleSticker,
  // } = useStickers();

  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState(FILTERS.ALL);

  // const stats = useMemo(() => ({
  //     all: stickers.length,
  //     missing: stickers.filter(s => !s.owned).length,
  //     owned: stickers.filter(s => s.owned).length,
  //     duplicates: stickers.filter(s => s.duplicates > 0).length,
  // }), [stickers]);

const {
    stickers,
    stats,
    search,
    setSearch,
    filter,
    setFilter,
    toggleSticker,
    sections,
} = useAlbum();
  
  const filters = [
      {
          key: FILTERS.ALL,
          // title: `All (${stats.all})`,
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
  
  const filteredStickers = useMemo(() => {
      let result = [...stickers];
  
      switch(filter){
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
  
      if(search.trim()){
          if(/^\d+$/.test(search)){
              result = result.filter(
                  s => s.number === Number(search)
              );
          }else{
              const term = search.toLowerCase();
  
              result = result.filter(s =>
                  s.name?.toLowerCase().includes(term)
                  || s.team?.toLowerCase().includes(term)
              );
          }
      }
  
      return result;
  
  }, [stickers, search, filter]);

  return (
    <SafeAreaView style={styles.container}>

      <AlbumHeader
          owned={stats.owned}
          total={stats.total}
      />

      
      <View style={styles.header}>

        {/*
        <Text style={styles.title}>
          Album
        </Text>

        <Text style={styles.subtitle}>
          // {ownedCount} / {totalCount} stickere
          {stats.owned} / {stats.total} stickere
        </Text>
        */}

      <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Număr, jucător sau echipă..."
      />

      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
      >
          {filters.map(item => (
              <FilterChip
                  key={item.key}
                  title={item.title}
                  selected={filter === item.key}
                  onPress={() => setFilter(item.key)}
              />
          ))}
      </ScrollView>
      </View>

      
      {/*<FlatList
        data={filteredStickers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StickerItem
            sticker={item}
            onPress={() => toggleSticker(item.id)}
          />
        )}
        //showsVerticalScrollIndicator={false}
        //contentContainerStyle={styles.list}

        style={{ flex: 1 }}
        contentContainerStyle={{
            paddingBottom: 24,
        }}
        ListEmptyComponent={
            <EmptyState
                text="Nu s-au găsit stickere."
            />
        }
      />*/}
      
    <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <StickerItem
                sticker={item}
                onPress={() => toggleSticker(item.id)}
            />
        )}
        renderSectionHeader={({ section }) => (
            <SectionHeader
                title={section.title}
            />
        )}
        ListEmptyComponent={
              <EmptyState
                  text="Nu s-au găsit stickere."
              />
        }
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

  filters: {
    paddingHorizontal: 24,
    paddingBottom: 12,
    // alignItems: "center",
  },
  
});