import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function StatisticCard({
    title,
    value,
    icon,
    color = Colors.primary,
}) {

    return (

        <View style={styles.container}>

            <View style={styles.header}>
            
                <Ionicons
                    name={icon}
                    size={24}
                    color={color}
                />
            
                <Text
                    style={[
                        styles.value,
                        { color },
                    ]}
                >
                    {value}
                </Text>
            
            </View>
            
            <Text style={styles.title}>
                {title}
            </Text>
          
        </View>


    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: Spacing.lg,
        margin: Spacing.xs,
        alignItems: "center",
        justifyContent: "center",

        elevation: 2,

        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    
    value: {
        marginLeft: 8,
        fontSize: 28,
        fontWeight: "bold",
    },

    title: {
        marginTop: 8,
        fontSize: Typography.body,
        color: Colors.textSecondary,
    },

});