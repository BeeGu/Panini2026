// ⭐️ Refactored
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

import StickerStatus from "./StickerStatus";
import StickerInfo from "./StickerInfo";

export default function StickerItem({ sticker, onToggle, onLongPress }) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
      onPress={() =>
        navigation.navigate("StickerDetails", {
          stickerId: sticker.id,
          title: sticker.name,
        })
      }
      onLongPress={() => onLongPress?.(sticker)}
    >
      <StickerStatus
        owned={sticker.owned}
        onPress={() => onToggle(sticker.id)}
      />

      <StickerInfo sticker={sticker} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Spacing.md,
    marginVertical: 6,
    padding: Spacing.md,
    borderRadius: 14,
    elevation: 2,
  },
});
