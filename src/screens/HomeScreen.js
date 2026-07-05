import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../components/common/ProgressBar";


export default function HomeScreen() {
  console.log("HomeScreen rendered");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Panini Tracker 2026</Text>


<View style={{ width: "80%" }}>
  <ProgressBar progress={25} />
  {/*
  <ProgressBar progress={80} color="green" />
  
  <ProgressBar progress={50} height={20} />
  */}
</View>

      
{/* <View
  style={{
    width: 200,
    height: 20,
    backgroundColor: "red",
  }}
/> */}
      
      <Text style={styles.subtitle}>
        Album FIFA World Cup 2026
      </Text>

      <Text style={styles.progress}>
        0 / 980 Stickere
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
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

  progress: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
});