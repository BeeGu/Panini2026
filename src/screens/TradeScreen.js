import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useAlbum from "../hooks/useAlbum";
import useToast from "../hooks/useToast";

import Spacing from "../theme/spacing";
import Typography from "../theme/typography";

import groupTrade from "../utils/groupTrade";

import ScreenHeader from "../components/common/ScreenHeader";

import TradeSummaryCard from "../components/trade/TradeSummaryCard";
import TradeSectionAccordion from "../components/trade/TradeSectionAccordion";
import SectionTitle from "../components/common/SectionTitle";
import TradeExportButtons from "../components/trade/TradeExportButtons";

import TradeExportService from "../services/TradeExportService";

export default function TradeScreen() {
  const { colors } = useTheme();
  const { stickers, duplicateStickers, missingStickers, tradeSummary } =
    useAlbum();

  const duplicates = stickers.filter((sticker) => sticker.duplicates > 0);

  const missing = stickers.filter((sticker) => !sticker.owned);

  const duplicateSections = groupTrade(duplicateStickers);

  const missingSections = groupTrade(missing);

  const toast = useToast();

  async function handleCopy() {
    await TradeExportService.copy(stickers);

    toast.show({
      type: "success",
      message: "Trade list copied to clipboard.",
    });
  }

  async function handleShare() {
    await TradeExportService.share(stickers);

    toast.show({
      type: "success",
      message: "Trade list shared.",
    });
  }

  function handleExport() {
    // TODO
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        // styles.container,
        {
          backgroundColor: colors.background,
          flex: 1,
        },
      ]}
    >
      <ScreenHeader
        title="Trade Center"
        icon="swap-horizontal-outline"
        subtitle={`${tradeSummary.duplicates} duplicates available`}
      />

      <ScrollView>
        <TradeSummaryCard summary={tradeSummary} />

        <SectionTitle
          icon="gift"
          title={`Duplicates (${tradeSummary.duplicates})`}
        />

        {duplicateSections.map((section) => (
          <TradeSectionAccordion
            key={section.id}
            section={section}
            type="duplicate"
          />
        ))}

        <SectionTitle
          icon="alert-circle"
          title={`Missing (${tradeSummary.missing})`}
        />

        {missingSections.map((section) => (
          <TradeSectionAccordion
            key={section.id}
            section={section}
            type="missing"
          />
        ))}

        <TradeExportButtons
          onCopy={handleCopy}
          onShare={handleShare}
          onExport={handleExport}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: Typography.h1,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.body,
  },
});
