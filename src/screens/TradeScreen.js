import { useState } from "react";
import { useTranslation } from "react-i18next";

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
import ImportedTradeCard from "../components/trade/ImportedTradeCard";

import TradeExportService from "../services/TradeExportService";
import TradeService from "../services/TradeService";

import SettingsService from "../services/SettingsService";

export default function TradeScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { stickers, duplicateStickers, missingStickers, tradeSummary } =
    useAlbum();

  const duplicateSections = groupTrade(duplicateStickers);
  const missingSections = groupTrade(missingStickers);

  const toast = useToast();

  const [tradeMode, setTradeMode] = useState(TRADE_MODES.BOTH);
  const [importedTrade, setImportedTrade] = useState(null);

  const subtitle =
    tradeMode === TRADE_MODES.DUPLICATES
      ? t("trade.duplicatesAvailable", {
          count: tradeSummary.duplicates,
        })
      : tradeMode === TRADE_MODES.MISSING
        ? t("trade.stickersMissing", {
            count: tradeSummary.missing,
          })
        : t("trade.duplicatesAndMissing", {
            duplicates: tradeSummary.duplicates,
            missing: tradeSummary.missing,
          });

  async function handleCopy() {
    try {
      await TradeExportService.copy(stickers, tradeMode);

      toast.show({
        type: "success",
        message: t("trade.copySuccess"),
      });
    } catch (error) {
      console.error("Trade copy error:", error);

      toast.show({
        type: "error",
        message: t("trade.copyError"),
      });
    }
  }

  async function handleShare() {
    try {
      await TradeExportService.share(stickers, tradeMode);

      toast.show({
        type: "success",
        message: t("trade.shareSuccess"),
      });
    } catch (error) {
      console.error("Trade share error:", error);

      toast.show({
        type: "error",
        message: t("trade.shareError"),
      });
    }
  }

  async function handleShareJson() {
    try {
      const userName = SettingsService.getTradeUserName();

      await TradeExportService.exportJson(stickers, userName);

      toast.show({
        type: "success",
        message: t("trade.shareSuccess"),
      });
    } catch (error) {
      console.error("Trade JSON share error:", error);

      toast.show({
        type: "error",
        message: t("trade.shareError"),
      });
    }
  }

  async function handleImport() {
    try {
      const trade = await TradeService.importTrade();

      if (!trade) {
        return;
      }

      const match = TradeService.matchTrade(trade, stickers);

      setImportedTrade(match);
    } catch (error) {
      console.error("Trade import error:", error);

      toast.show({
        type: "error",
        message: error.message || t("trade.importError"),
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
        title={t("trade.title")}
        icon="git-compare-outline"
        subtitle={subtitle}
      />

      <ScrollView>
        <TradeSummaryCard summary={tradeSummary} />

        <ExpandableCard
          title={t("trade.duplicatesCount", {
            count: tradeSummary.duplicates,
          })}
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
          title={t("trade.missingCount", {
            count: tradeSummary.missing,
          })}
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
          onShareJson={handleShareJson}
          onImport={handleImport}
        />

        {importedTrade && <ImportedTradeCard trade={importedTrade} />}
      </ScrollView>
    </SafeAreaView>
  );
}
