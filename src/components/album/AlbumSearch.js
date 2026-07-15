import { View, StyleSheet } from "react-native";

import SearchBar from "../common/SearchBar";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function AlbumSearch({
    value,
    onChangeText,
}) {

    return (

        <View style={styles.container}>

            <SearchBar
                value={value}
                onChangeText={onChangeText}
                placeholder="Număr, jucător sau echipă..."
            />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.md,
    },

});