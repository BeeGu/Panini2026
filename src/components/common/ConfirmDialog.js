import { Modal, View, Text, StyleSheet } from "react-native";

import Card from "./Card";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function ConfirmDialog({
    visible,
    title,
    children,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
}) {

    return (

        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >

            <View style={styles.overlay}>

                <Card style={styles.dialog}>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <View style={styles.content}>
                        {children}
                    </View>

                  {/*<View style={styles.buttons}>

                        <SecondaryButton
                            title={cancelText}
                            onPress={onCancel}
                        />

                        <PrimaryButton
                            title={confirmText}
                            onPress={onConfirm}
                        />

                    </View> */}

                    <View style={styles.buttons}>
                    
                        <SecondaryButton
                            title={cancelText}
                            onPress={onCancel}
                            style={{ flex: 1 }}
                        />
                    
                        <PrimaryButton
                            title={confirmText}
                            onPress={onConfirm}
                            style={{ flex: 1 }}
                        />
                    
                    </View>
                  
                </Card>

            </View>

        </Modal>

    );

}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        padding: Spacing.lg,
    },

    dialog: {
        padding: Spacing.lg,
    },

    title: {
        fontSize: Typography.h2,
        fontWeight: "700",
        marginBottom: Spacing.md,
        color: Colors.text,
    },

    content: {
        marginBottom: Spacing.lg,
    },

    // buttons: {
    //     flexDirection: "row",
    //     justifyContent: "flex-end",
    //     gap: 12,
    // },
    buttons: {
        flexDirection: "row",
        gap: 12,
    },

});