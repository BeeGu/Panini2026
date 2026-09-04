import { useTranslation } from "react-i18next";

import Card from "../common/Card";
import Column from "../common/Column";
import StatItem from "../common/StatItem";
import Divider from "../common/Divider";

export default function TradeSummaryCard({ summary }) {
  const { t } = useTranslation();

  return (
    <Card>
      <Column gap={12}>
        <StatItem
          icon="gift"
          value={summary.duplicates}
          label={t("trade.duplicates")}
        />

        <Divider />

        <StatItem
          icon="alert-circle"
          value={summary.missing}
          label={t("trade.missing")}
        />
      </Column>
    </Card>
  );
}
