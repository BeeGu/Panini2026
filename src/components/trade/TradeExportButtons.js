/*
import { View, StyleSheet } from "react-native";

import PrimaryButton from "../common/PrimaryButton";

import Spacing from "../../theme/spacing";

export default function TradeExportButtons() {

    return (
        <View style={styles.container}>

            <PrimaryButton
                title="📋 Copy"
                onPress={() => {}}
            />

            <PrimaryButton
                title="📤 Share"
                onPress={() => {}}
            />

            <PrimaryButton
                title="📄 Export TXT"
                onPress={() => {}}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: Spacing.lg,
        gap: 12,
    },

});
*/

import { View, StyleSheet } from "react-native";

import PrimaryButton from "../common/PrimaryButton";

import Spacing from "../../theme/spacing";

export default function TradeExportButtons({

    onCopy,
    onShare,
    onExport,

}) {

    return (

        <View style={styles.container}>

            <PrimaryButton
                title="📋 Copy"
                onPress={onCopy}
            />

            <PrimaryButton
                title="📤 Share"
                onPress={onShare}
            />

            <PrimaryButton
                title="📄 Export TXT"
                onPress={onExport}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        padding: Spacing.lg,
        gap: 12,
    },

});