import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

export default function AlbumHeader({ owned, total }) {

    const progress = total ? (owned / total) * 100 : 0;

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                🏆 FIFA World Cup 2026
            </Text>

            <ProgressBar progress={progress} />

            <Text style={styles.progress}>
                {owned} / {total} stickere ({progress.toFixed(1)}%)
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:Colors.white,
        padding:Spacing.lg,
    },

    title:{
        fontSize:Typography.h1,
        fontWeight:"bold",
        color:Colors.primary,
        marginBottom:12,
    },

    progress:{
        marginTop:10,
        textAlign:"center",
        fontWeight:"600",
    }

});