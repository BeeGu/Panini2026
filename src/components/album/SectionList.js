import { FlatList } from "react-native";

import SectionAccordion from "./SectionAccordion";
import ExtraStickerList from "./ExtraStickerList";

export default function SectionList({ sections, extraStickers, onToggle }) {
  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <SectionAccordion section={item} onToggle={onToggle} />
      )}
      ListFooterComponent={
        <ExtraStickerList stickers={extraStickers} onToggle={onToggle} />
      }
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
