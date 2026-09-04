import ExpandableCard from "../common/ExpandableCard";

import TeamHeader from "./TeamHeader";
import StickerList from "./StickerList";

export default function TeamAccordion({
  team,
  onToggle,
  defaultExpanded = false,
}) {
  return (
    <ExpandableCard
      initiallyExpanded={defaultExpanded}
      contentPadding={false}
      showDivider={false}
      headerContent={<TeamHeader team={team} />}
    >
      <StickerList stickers={team.stickers} onToggle={onToggle} />
    </ExpandableCard>
  );
}
