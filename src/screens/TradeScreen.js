// ⭐️ Refactored
// TradeScreen
//  ├── ScreenHeader
//  ├── TradeSummaryCard
//  ├── SectionTitle
//  ├── TradeSectionAccordion
//  │    └── TradeTeamAccordion
//  │         └── TradeStickerList/Card
//  ├── SectionTitle
//  └── TradeExportButtons
// ⭐️ Refactored

import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useAlbum from "../hooks/useAlbum";
import useToast from "../hooks/useToast";

import groupTrade from "../utils/groupTrade";

import ScreenHeader from "../components/common/ScreenHeader";
import ExpandableCard from "../components/common/ExpandableCard";

import TradeSummaryCard from "../components/trade/TradeSummaryCard";
import TradeSectionAccordion from "../components/trade/TradeSectionAccordion";
import TradeExportButtons, {
  TRADE_MODES,
} from "../components/trade/TradeExportButtons";

import TradeExportService from "../services/TradeExportService";

export default function TradeScreen() {
  const { colors } = useTheme();

  const { stickers, duplicateStickers, missingStickers, tradeSummary } =
    useAlbum();

  const duplicateSections = groupTrade(duplicateStickers);
  const missingSections = groupTrade(missingStickers);

  const toast = useToast();

  const [tradeMode, setTradeMode] = useState(TRADE_MODES.BOTH);

  const subtitle =
    tradeMode === TRADE_MODES.DUPLICATES
      ? `${tradeSummary.duplicates} duplicates available`
      : tradeMode === TRADE_MODES.MISSING
        ? `${tradeSummary.missing} stickers missing`
        : `${tradeSummary.duplicates} duplicates • ${tradeSummary.missing} missing`;

  async function handleCopy() {
    try {
      await TradeExportService.copy(stickers, tradeMode);

      toast.show({
        type: "success",
        message: "Trade list copied to clipboard.",
      });
    } catch (error) {
      console.error("Trade copy error:", error);

      toast.show({
        type: "error",
        message: "Could not copy trade list.",
      });
    }
  }

  async function handleShare() {
    try {
      await TradeExportService.share(stickers, tradeMode);

      toast.show({
        type: "success",
        message: "Trade list shared.",
      });
    } catch (error) {
      console.error("Trade share error:", error);

      toast.show({
        type: "error",
        message: "Could not share trade list.",
      });
    }
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScreenHeader
        title="Trade Center"
        icon="swap-horizontal-outline"
        subtitle={subtitle}
      />

      <ScrollView>
        <TradeSummaryCard summary={tradeSummary} />

        <ExpandableCard
          title={`Duplicates (${tradeSummary.duplicates})`}
          icon="gift"
          initiallyExpanded={false}
          contentPadding={false}
        >
          {duplicateSections.map((section) => (
            <TradeSectionAccordion
              key={section.id}
              section={section}
              type="duplicate"
            />
          ))}
        </ExpandableCard>

        <ExpandableCard
          title={`Missing (${tradeSummary.missing})`}
          icon="alert-circle"
          initiallyExpanded={false}
          contentPadding={false}
        >
          {missingSections.map((section) => (
            <TradeSectionAccordion
              key={section.id}
              section={section}
              type="missing"
            />
          ))}
        </ExpandableCard>

        <TradeExportButtons
          mode={tradeMode}
          onModeChange={setTradeMode}
          onCopy={handleCopy}
          onShare={handleShare}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
