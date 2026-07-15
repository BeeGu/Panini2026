import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function RecentActivity({
    stickers,
}) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Recent activity
            </Text>

            {stickers.length === 0 ? (

                <Text style={styles.empty}>
                    No stickers collected yet.
                </Text>

            ) : (

                stickers.map(sticker => (

                    <View
                        key={sticker.id}
                        style={styles.item}
                    >

                        <Ionicons
                            name="checkmark-circle"
                            size={18}
                            color={Colors.success}
                        />

                        <Text style={styles.text}>
                            #{sticker.number} {sticker.name}
                        </Text>

                    </View>

                ))

            )}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: "90%",
        marginTop: 24,
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: Spacing.lg,
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 12,
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    text: {
        marginLeft: 10,
    },

    empty: {
        color: Colors.textSecondary,
    },

});