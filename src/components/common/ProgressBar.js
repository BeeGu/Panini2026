import { View, StyleSheet } from "react-native";
import Colors from "../../theme/colors";
/*
export default function ProgressBarOld({ progress }) {
  console.log ("🔰 ProgressBar", {progress})
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          {
            width: `${Math.max(0, Math.min(progress, 100))}%`,
          },
        ]}
      />
    </View>
  );
}
*/
const stylesOld = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
});

const styles2 = StyleSheet.create({
  container: {
    width: "100%",
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
});

export default function ProgressBar({
  progress,
  height = 10,
  color = Colors.primary,
}) {
  const safeProgress = Math.max(0, Math.min(progress, 100));

  return (
    <View style={[styles.container, { height }]}>
      <View
        style={[
          styles.progress,
          {
            width: `${safeProgress}%`,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
  },
});