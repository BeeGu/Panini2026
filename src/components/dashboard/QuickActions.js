import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

import MenuCard from "../common/MenuCard";

export default function QuickActions({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MenuCard
          title={t("home.album")}
          icon="book-outline"
          onPress={() => navigation.navigate("Album")}
        />

        <MenuCard
          title={t("home.search")}
          icon="search-outline"
          onPress={() => navigation.navigate("Search")}
        />
      </View>

      <View style={styles.row}>
        <MenuCard
          title={t("home.statistics")}
          icon="stats-chart-outline"
          onPress={() => navigation.navigate("Statistics")}
        />

        <MenuCard
          title={t("home.settings")}
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
