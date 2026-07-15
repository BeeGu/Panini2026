import { Button, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import QuantitySelector from "../common/QuantitySelector";
import useAlbum from "../../hooks/useAlbum";

export default function StickerCollectionCard({ sticker }) {

  const {
      addDuplicate,
      removeDuplicate,
  } = useAlbum();
  
    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                Collection
            </Text>

            <View style={styles.row}>

                <Text style={styles.label}>
                    Owned
                </Text>

                <Ionicons
                    name={sticker.owned ? "checkmark-circle" : "ellipse-outline"}
                    size={24}
                    color={sticker.owned ? Colors.success : Colors.textSecondary}
                />

            </View>

            <View style={styles.row}>
            
                <Text style={styles.label}>
                    Duplicates
                </Text>
            
                <QuantitySelector
                    value={sticker.duplicates}
                    onIncrement={() => addDuplicate(sticker.id)}
                    onDecrement={() => removeDuplicate(sticker.id)}
                />
            
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 14,
        backgroundColor: Colors.white,
        elevation: 2,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: Spacing.md,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 6,
    },

    label: {
        fontSize: 16,
        color: Colors.textSecondary,
    },

    value: {
        fontSize: 16,
        fontWeight: "700",
    },

});