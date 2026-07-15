import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";
import { formatStickerNumber } from "../../utils/formatters";
import StickerStatus from "./StickerStatus";
import StickerInfo from "./StickerInfo";
import { useNavigation } from "@react-navigation/native";
import Flag from "../common/Flag";

export default function StickerItem({
    sticker,
    onToggle,
    onPress,
    onLongPress,
}) {
    const navigation = useNavigation();
  
    return (

        <Pressable
            style={styles.container}
            // onPress={() => onPress?.(sticker)}
            onPress={() =>
              navigation.navigate("StickerDetails", {
                  stickerId: sticker.id,
                  title: sticker.name,
              })
            }
            onLongPress={() => onLongPress?.(sticker)}
        >

            <StickerStatus
                owned={sticker.owned}
                onPress={() => onToggle(sticker.id)}
            />

            <StickerInfo
                sticker={sticker}
            />

        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.md,
        marginVertical: 6,
        padding: Spacing.md,
        borderRadius: 14,
        elevation: 2,
    },

});