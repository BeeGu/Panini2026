// ⭐️ Refactored
import ExpandableCard from "../common/ExpandableCard";

import TradeTeamAccordion from "./TradeTeamAccordion";

export default function TradeSectionAccordion({ section, type }) {
  const isDuplicate = type === "duplicate";

  return (
    <ExpandableCard
      title={section.name}
      subtitle={
        isDuplicate
          ? `${section.duplicates} duplicates`
          : `${section.missing} missing`
      }
      // contentPadding={false}
    >
      {section.teams.map((team) => (
        <TradeTeamAccordion key={team.id} team={team} type={type} />
      ))}
    </ExpandableCard>
  );
}
