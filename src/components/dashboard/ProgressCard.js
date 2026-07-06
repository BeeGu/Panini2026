import { View, Text, StyleSheet } from "react-native";
import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";

export default function ProgressCard({
  owned = 0,
  total = 980,
}) {
  const percent = Math.round((owned / total) * 100);

  return (
    <Card>
      <Text style={styles.title}>Album Progress</Text>

      <ProgressBar progress={percent} />
      {/* <ProgressBar progress={25} />
      <ProgressBar progress={80} color="green" />
      <ProgressBar progress={50} height={20} /> */}

      <Text style={styles.progress}>
        {owned} / {total} ({percent}%)
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  progress: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});