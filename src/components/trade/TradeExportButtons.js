
import { View, StyleSheet } from "react-native";

import PrimaryButton from "../common/PrimaryButton";
import Button from "../common/Button";

import Spacing from "../../theme/spacing";

export default function TradeExportButtons({
    onCopy,
    onShare,
    onExport,
}) {

    return (

        <View style={styles.container}>

            <Button
                // title="📋 Copy"              
                title="Copy"
                onPress={onCopy}
                variant="primary"
                disabled={false}
                loading={false}
            />

            <Button
                // title="📤 Share"
                title="Share"
                onPress={onShare}
                variant="secondary"
            />

            <Button
                // title="📄 Export TXT"
                title="Export TXT"
                onPress={onExport}
                variant="secondary"
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