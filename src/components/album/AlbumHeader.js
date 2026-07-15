import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";
/*
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
*/
export default function AlbumHeader({
    owned,
    total,
}) {

    const percentage = total
        ? Math.round((owned / total) * 100)
        : 0;

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Album
            </Text>

            <Text style={styles.subtitle}>
                {owned} / {total} stickere ({percentage}%)
            </Text>
{/*
<Text style={styles.subtitle}>
    {owned} / {total}
</Text>
*/}
<ProgressBar
    value={owned}
    max={total}
    height={12}
/>
{/*
<Text style={styles.percent}>
    {Math.round(owned / total * 100)}%
</Text>
*/}
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },

    title: {
        fontSize: Typography.h1,
        fontWeight: "700",
        color: Colors.primary,
    },

    subtitle: {
        marginTop: 4,
        fontSize: Typography.body,
        color: Colors.textSecondary,
    },

});