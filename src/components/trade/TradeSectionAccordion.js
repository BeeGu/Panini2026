import { useTranslation } from "react-i18next";

import ExpandableCard from "../common/ExpandableCard";

import TradeTeamAccordion from "./TradeTeamAccordion";

export default function TradeSectionAccordion({ section, type }) {
  const { t } = useTranslation();
  const isDuplicate = type === "duplicate";

  return (
    <ExpandableCard
      title={section.name}
      subtitle={
        isDuplicate
          ? t("trade.duplicatesCount", {
              count: section.duplicates,
            })
          : t("trade.missingCount", {
              count: section.missing,
            })
      }
      // contentPadding={false}
    >
      {section.teams.map((team) => (
        <TradeTeamAccordion key={team.id} team={team} type={type} />
      ))}
    </ExpandableCard>
  );
}
