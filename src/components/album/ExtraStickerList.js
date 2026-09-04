import { useTranslation } from "react-i18next";
import { View } from "react-native";

import ExpandableCard from "../common/ExpandableCard";
import ExtraStickerItem from "./ExtraStickerItem";

import Spacing from "../../theme/spacing";

export default function ExtraStickerList({
  stickers,
  onToggle,
  defaultExpanded = false,
}) {
  const { t } = useTranslation();
  if (!stickers?.length) {
    return null;
  }

  return (
    <ExpandableCard
      title={t("album.extraStickers")}
      initiallyExpanded={defaultExpanded}
      contentPadding={false}
    >
      <View style={{ padding: Spacing.md }}>
        {stickers.map((item) => (
          <ExtraStickerItem key={item.id} item={item} onToggle={onToggle} />
        ))}
      </View>
    </ExpandableCard>
  );
}
