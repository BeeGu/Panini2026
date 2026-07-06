import { View, Text, StyleSheet } from "react-native";

import Colors from "../../theme/colors";

export default function SectionHeader({ title }) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#EEF4FF",
        paddingVertical:10,
        paddingHorizontal:20,
    },

    title:{
        fontWeight:"700",
        fontSize:18,
        color:Colors.primary,
    }

});