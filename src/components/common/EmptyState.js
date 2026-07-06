import { View, Text, StyleSheet } from "react-native";

export default function EmptyState({ text }) {

    return (

        <View style={styles.container}>

            <Text style={styles.icon}>
                🔍
            </Text>

            <Text style={styles.text}>
                {text}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        padding:40,
        alignItems:"center",
    },

    icon:{
        fontSize:42,
    },

    text:{
        marginTop:10,
        fontSize:16,
        color:"#666",
    }

});