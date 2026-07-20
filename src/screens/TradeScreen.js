/*
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";

import TradeSummaryCard from "../components/trade/TradeSummaryCard";
import TradeDuplicatesSection from "../components/trade/TradeDuplicatesSection";
import TradeMissingSection from "../components/trade/TradeMissingSection";
import TradeExportButtons from "../components/trade/TradeExportButtons";

import useAlbum from "../hooks/useAlbum";

import Colors from "../theme/colors";

export default function TradeScreen() {
    const {
        duplicateStickers,
        missingStickers,
        tradeSummary,
    } = useAlbum();

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView>

              <TradeSummaryCard
                    summary={tradeSummary}
                />

                <TradeDuplicatesSection
                    stickers={duplicateStickers}
                />

                <TradeMissingSection
                    stickers={missingStickers}
                />

                <TradeExportButtons />

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

});
*/

import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAlbum from "../hooks/useAlbum";
import useToast from "../hooks/useToast";

import groupTrade from "../utils/groupTrade";

import TradeSummaryCard from "../components/trade/TradeSummaryCard";
import TradeSectionAccordion from "../components/trade/TradeSectionAccordion";
import SectionTitle from "../components/common/SectionTitle";
import TradeExportButtons from "../components/trade/TradeExportButtons";

import TradeExportService from "../services/TradeExportService";

export default function TradeScreen() {

    const {
        stickers,
        duplicateStickers,
        missingStickers,
        tradeSummary,
    } = useAlbum();

    const duplicates = stickers.filter(
        sticker => sticker.duplicates > 0
    );

    const missing = stickers.filter(
        sticker => !sticker.owned
    );

    // const duplicateSections = groupTrade(duplicates);
    const duplicateSections = groupTrade(duplicateStickers);

    const missingSections = groupTrade(missing);
    // const missingSections = groupTrade(missingStickers);

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

        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView>

                <TradeSummaryCard
                    summary={tradeSummary}
                />

                <SectionTitle
                    icon="gift"
                    // title={`Duplicates (${duplicates.length})`}
                    title={`Duplicates (${tradeSummary.duplicates})`}
                />

                {duplicateSections.map(section => (
                    <TradeSectionAccordion
                        key={section.id}
                        section={section}
                        type="duplicate"
                    />
                ))}

                <SectionTitle
                    icon="alert-circle"
                    // title={`Missing (${missing.length})`}
                    title={`Missing (${tradeSummary.missing})`}
                />

                {missingSections.map(section => (
                    <TradeSectionAccordion
                        key={section.id}
                        section={section}
                        type="missing"
                    />
                ))}

                <TradeExportButtons
                    //onCopy={() =>
                    //    TradeExportService.copy(stickers)
                    //}
                    //onShare={() =>
                    //    TradeExportService.share(stickers)
                    //}
                    //onExport={() => {
                    //    // etapa următoare
                    //}}
                    onCopy={handleCopy}
                    onShare={handleShare}
                    onExport={handleExport}
                />

            </ScrollView>

        </SafeAreaView>

    );

}