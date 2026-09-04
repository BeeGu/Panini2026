import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";

import StickerItem from "../stickers/StickerItem";
import EmptyState from "../common/EmptyState";

export default function StickerList({ stickers, onToggle, onLongPress }) {
  const { t } = useTranslation();
  return (
    <FlatList
      data={stickers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <StickerItem
          sticker={item}
          onToggle={onToggle}
          onLongPress={onLongPress}
        />
      )}
      contentContainerStyle={{
        paddingBottom: 24,
        flexGrow: stickers.length === 0 ? 1 : undefined,
      }}
      ListEmptyComponent={<EmptyState text={t("album.stickerList.empty")} />}
    />
  );
}
