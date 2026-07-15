import { View, StyleSheet } from "react-native";

import MenuCard from "../common/MenuCard";

export default function QuickActions({
    navigation,
}) {

    return (

        <View style={styles.container}>

            <View style={styles.row}>

                <MenuCard
                    title="Album"
                    icon="book-outline"
                    onPress={() => navigation.navigate("Album")}
                />

                <MenuCard
                    title="Search"
                    icon="search-outline"
                    onPress={() => navigation.navigate("Search")}
                />

            </View>

            <View style={styles.row}>

                <MenuCard
                    title="Statistics"
                    icon="stats-chart-outline"
                    onPress={() => navigation.navigate("Statistics")}
                />

                <MenuCard
                    title="Settings"
                    icon="settings-outline"
                    onPress={() => navigation.navigate("Settings")}
                />

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: "90%",
        marginTop: 20,
    },

    row: {
        flexDirection: "row",
        marginBottom: 16,
    },

});