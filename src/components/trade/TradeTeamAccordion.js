// ⭐️ Refactored
import ExpandableCard from "../common/ExpandableCard";
import Flag from "../common/Flag";

import TradeStickerList from "./TradeStickerList";

export default function TradeTeamAccordion({ team, type }) {
  const isDuplicate = type === "duplicate";

  return (
    <ExpandableCard
      title={team.name}
      subtitle={
        isDuplicate
          ? `${team.duplicates} duplicates`
          : `${team.missing} missing`
      }
      leftContent={<Flag iso2={team.iso2} size={48} />}
      contentPadding={false}
    >
      <TradeStickerList stickers={team.stickers} type={type} />
    </ExpandableCard>
  );
}
