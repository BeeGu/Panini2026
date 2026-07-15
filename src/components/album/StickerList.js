import { FlatList } from "react-native";

// import StickerItem from "./StickerItem";
import StickerItem from "../stickers/StickerItem";
import EmptyState from "../common/EmptyState";

export default function StickerList({
    stickers,
    onToggle,
    onPress,
    onLongPress,
}) {

    return (

        <FlatList
            data={stickers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (

              <StickerItem
                  sticker={item}
                  onToggle={onToggle}
                  // onPress={onPress}
                  onLongPress={onLongPress}
              />

            )}
            contentContainerStyle={{
                paddingBottom: 24,
                flexGrow: stickers.length === 0 ? 1 : undefined,
            }}
            ListEmptyComponent={
                <EmptyState
                    text="Nu s-au găsit stickere."
                />
            }
        />

    );

}