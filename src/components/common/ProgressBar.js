/*
import { View, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function ProgressBar({
    value,
    max,
    height = 8,
    color,
    autoColor = true,
}) {

    const { colors } = useTheme();

    function getColor(percent) {

        if (percent >= 100)
            return colors.progressComplete;

        if (percent >= 75)
            return colors.progressGood;

        if (percent >= 50)
            return colors.progressHigh;

        if (percent >= 25)
            return colors.progressMedium;

        return colors.progressLow;

    }

    const percent = Math.max(
        0,
        Math.min(
            max > 0
                ? (value / max) * 100
                : 0,
            100
        )
    );

    const progressColor = autoColor
        ? getColor(percent)
        : (color ?? colors.primary);

    return (

        <View
            style={[
                styles.track,
                {
                    height,
                    backgroundColor: colors.progressTrack,
                },
            ]}
        >

            <View
                style={[
                    styles.fill,
                    {
                        width: `${percent}%`,
                        backgroundColor: progressColor,
                    },
                ]}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    track: {
        borderRadius: 100,
        overflow: "hidden",
    },

    fill: {
        // flex: 1,
        height: "100%",
        borderRadius: 100,
    },

});
*/

import { View, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

export default function ProgressBar({
    value,
    max,
    height = 8,
    color,
    autoColor = true,
}) {

    const { colors } = useTheme();

    function getColor(percent) {

        if (percent >= 100)
            return colors.progressComplete;

        if (percent >= 75)
            return colors.progressGood;

        if (percent >= 50)
            return colors.progressHigh;

        if (percent >= 25)
            return colors.progressMedium;

        return colors.progressLow;
    }

    const percent = Math.max(
        0,
        Math.min(
            max > 0
                ? (value / max) * 100
                : 0,
            100
        )
    );

    const progressColor = autoColor
        ? getColor(percent)
        : (color ?? colors.primary);

    return (

        <View
            style={[
                styles.track,
                {
                    height,
                    backgroundColor: colors.progressTrack,
                },
            ]}
        >

            <View
                style={[
                    styles.fill,
                    {
                        width: `${percent}%`,
                        backgroundColor: progressColor,
                    },
                ]}
            />

        </View>

    );
}

const styles = StyleSheet.create({

    track: {
        borderRadius: 100,
        overflow: "hidden",
    },

    fill: {
        height: "100%",
        borderRadius: 100,
    },

});
