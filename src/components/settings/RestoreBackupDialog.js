import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ConfirmDialog from "../common/ConfirmDialog";
import Row from "../common/Row";

import Typography from "../../theme/typography";
import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function RestoreBackupDialog({
    visible,
    backup,
    onRestore,
    onCancel,
}) {

    if (!backup)
        return null;

    return (

        <ConfirmDialog
            visible={visible}
            title="Restore Backup"
            confirmText="Restore"
            cancelText="Cancel"
            onConfirm={onRestore}
            onCancel={onCancel}
        >

            <Row>

                <Ionicons
                    name="calendar-outline"
                    size={20}
                />

                <Text>
                    {new Date(
                        backup.createdAt
                    ).toLocaleString()}
                </Text>

            </Row>

            <Row>

                <Ionicons
                    name="albums-outline"
                    size={20}
                />

                <Text>
                    {backup.album}
                </Text>

            </Row>

            <Row>

                <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={Colors.success}
                />

                <Text>
                    Owned: {backup.stats.owned}
                </Text>

            </Row>

            <Row>

                <Ionicons
                    name="alert-circle"
                    size={20}
                    color={Colors.warning}
                />

                <Text>
                    Missing: {backup.stats.missing}
                </Text>

            </Row>

            <Row>

                <Ionicons
                    name="gift"
                    size={20}
                    color={Colors.primary}
                />

                <Text>
                    Duplicates: {backup.stats.duplicates}
                </Text>

            </Row>

            <Text style={styles.warning}>

                Your current collection will be replaced.

            </Text>

        </ConfirmDialog>

    );

}

const styles = StyleSheet.create({

    warning: {

        marginTop: Spacing.lg,

        color: Colors.danger,

        fontWeight: "600",

    },

});