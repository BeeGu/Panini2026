import { View, StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default function ProgressBar({
    value,
    max,
    height = 8,
    // color = Colors.primary,
    color,
    autoColor = true,
}) {

    // function getColor(percent) {
    //     if (percent < 25)
    //         return "#EF4444";
    //     if (percent < 50)
    //         return "#F97316";
    //     if (percent < 75)
    //         return "#EAB308";
    //     // if (percent = 100)
    //     //     return "#2563EB";
    //     return "#22C55E";
    //    // return color;
    // }

  function getColor(percent) {

    if (percent >= 100)
        return Colors.primary;

    if (percent >= 75)
        return "#22C55E";

    if (percent >= 50)
        return "#EAB308";

    if (percent >= 25)
        return "#F97316";

    return "#EF4444";

  }

    const percent1 = max > 0 ? (value / max) * 100 : 0;

    const percent = Math.max(
        0,
        Math.min(
            max > 0 ? (value / max) * 100 : 0,
            100
        )
    );
  
    const progressColor = autoColor
        ? getColor(percent)
        : (color ?? Colors.primary);
  
    return (

        <View
            style={[
                styles.track,
                {
                    height,
                },
            ]}
        >
            <View
                style={[
                    styles.fill,
                    {
                        width: `${percent}%`,
                        // backgroundColor: getColor(percent),
                        backgroundColor: progressColor,
                    },
                ]}
            />
        </View>
    );

}

const styles = StyleSheet.create({

    track: {
        backgroundColor: "#E5E7EB",
        borderRadius: 100,
        overflow: "hidden",
    },

    fill: {
        flex: 1,
        backgroundColor: Colors.success,
        borderRadius: 100,
    },

});