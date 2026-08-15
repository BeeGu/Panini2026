// ⭐️ Refactored
import Card from "../common/Card";
import Column from "../common/Column";
import StatItem from "../common/StatItem";
import Divider from "../common/Divider";

export default function TradeSummaryCard({ summary }) {
  return (
    <Card>
      <Column gap={12}>
        <StatItem icon="gift" value={summary.duplicates} label="Duplicates" />

        <Divider />

        <StatItem icon="alert-circle" value={summary.missing} label="Missing" />
      </Column>
    </Card>
  );
}
