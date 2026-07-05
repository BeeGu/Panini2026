import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../components/common/ProgressBar";
import MenuCard from "../components/common/MenuCard";
import ProgressCard from "../components/dashboard/ProgressCard";

import { getAllStickers } from "../database/repositories/StickerRepository";


export default function HomeScreen() {
  console.log(getAllStickers());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Panini Tracker 2026</Text>

      <Text style={styles.subtitle}>
        Album FIFA World Cup 2026
      </Text>

      {/*
      <View style={styles.progressContainer}>
        <ProgressBar progress={25} />
        
        <ProgressBar progress={80} color="green" />
        
        <ProgressBar progress={50} height={20} />
        
      </View>

      <Text style={styles.progress}>
        0 / 980 Stickere
      </Text> */}

      <View style={styles.progressContainer}>
        <ProgressCard owned={0} total={980} />
      </View>
      
      <View style={styles.row}>
          <MenuCard
              title="Album"
              icon="book-outline"
              onPress={() => console.log("Album")}
          />
      
          <MenuCard
              title="Search"
              icon="search-outline"
              onPress={() => console.log("Search")}
          />
      </View>
      
      <View style={styles.row}>
          <MenuCard
              title="Duplicates"
              icon="copy-outline"
              onPress={() => console.log("Duplicates")}
          />
      
          <MenuCard
              title="Statistics"
              icon="stats-chart-outline"
              onPress={() => console.log("Statistics")}
          />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    paddingTop: 50,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0057B8",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },

  progressContainer: {
    width: "90%",
    marginTop: 20,
  },
  
  progress: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 16,
  },
});