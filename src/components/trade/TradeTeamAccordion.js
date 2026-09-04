import { useTranslation } from "react-i18next";

import ExpandableCard from "../common/ExpandableCard";
import Flag from "../common/Flag";

import TradeStickerList from "./TradeStickerList";

export default function TradeTeamAccordion({ team, type }) {
  const { t } = useTranslation();
  const isDuplicate = type === "duplicate";

  return (
    <ExpandableCard
      title={team.name}
      subtitle={
        isDuplicate
          ? t("trade.duplicatesCount", {
              count: team.duplicates,
            })
          : t("trade.missingCount", {
              count: team.missing,
            })
      }
      leftContent={<Flag iso2={team.iso2} size={48} />}
      contentPadding={false}
    >
      <TradeStickerList stickers={team.stickers} type={type} />
    </ExpandableCard>
  );
}
