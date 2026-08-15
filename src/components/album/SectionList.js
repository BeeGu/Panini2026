// ⭐️ Refactored
import { FlatList } from "react-native";

import SectionAccordion from "./SectionAccordion";

export default function SectionList({ sections, onToggle }) {
  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <SectionAccordion section={item} onToggle={onToggle} />
      )}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
