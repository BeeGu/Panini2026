// ⭐️ Refactored
// AlbumScreen
//  ├── ScreenHeader
//  ├── AlbumSearch
//  ├── AlbumFilters
//  └── SectionList
//       └── SectionAccordion
//            └── TeamAccordion
//                 ├── TeamHeader
//                 │    └── AlbumStats
//                 └── StickerList
//                      └── StickerItem
//                           ├── StickerStatus
//                           └── StickerInfo
//                                ├── Flag
//                                └── Badge
// ⭐️ Refactored
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

import useAlbum from "../hooks/useAlbum";
import useTheme from "../hooks/useTheme";

import ScreenHeader from "../components/common/ScreenHeader";

import AlbumSearch from "../components/album/AlbumSearch";
import AlbumFilters from "../components/album/AlbumFilters";
import SectionList from "../components/album/SectionList";

export default function AlbumScreen() {
  const { colors } = useTheme();

  const {
    search,
    setSearch,
    filter,
    setFilter,
    stats,
    groupedAlbum,
    toggleSticker,
  } = useAlbum();

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
      <ScreenHeader
        title="Album"
        icon="book-outline"
        owned={stats.owned}
        total={stats.total}
      />

      <View style={styles.filtersArea}>
        <AlbumSearch value={search} onChangeText={setSearch} />

        <AlbumFilters filter={filter} setFilter={setFilter} stats={stats} />
      </View>

      <SectionList sections={groupedAlbum} onToggle={toggleSticker} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  filtersArea: {
    height: 190,
  },
});
