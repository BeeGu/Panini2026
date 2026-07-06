import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function StickerItem({ sticker, onPress }) {

    return (

        <Pressable
            style={styles.container}
            onPress={onPress}
        >

            <Ionicons
                name={sticker.owned ? "checkmark-circle" : "ellipse-outline"}
                size={30}
                color={sticker.owned ? Colors.success : "#9CA3AF"}
            />

            <View style={styles.content}>

                <View style={styles.header}>

                    <Text style={styles.number}>
                        #{sticker.number}
                    </Text>

                    {sticker.duplicates > 0 && (

                        <View style={styles.badge}>

                            <Text style={styles.badgeText}>
                                +{sticker.duplicates}
                            </Text>

                        </View>

                    )}

                </View>

                <Text style={styles.name}>
                    {sticker.name}
                </Text>

                <Text style={styles.team}>
                    {sticker.team}
                </Text>

            </View>

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

    content: {
        flex: 1,
        marginLeft: Spacing.md,
    },

    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    number:{
        fontWeight:"bold",
        fontSize:Typography.body,
    },

    name:{
        fontSize:18,
        marginTop:4,
    },

    team:{
        color:Colors.textSecondary,
        marginTop:2,
    },

    badge:{
        backgroundColor:Colors.primary,
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:10,
    },

    badgeText:{
        color:"white",
        fontWeight:"bold",
    }

});