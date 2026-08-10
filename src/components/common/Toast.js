/*
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

export default function Toast({

    visible,
    message,
    type,

}) {

    if (!visible)
        return null;

    const icon =
        type === "error"
            ? "close-circle"
            : "checkmark-circle";

    const color =
        type === "error"
            ? Colors.danger
            : Colors.success;

    return (

        <View style={styles.container}>

            <Ionicons
                name={icon}
                size={20}
                color={color}
            />

            <Text style={styles.text}>
                {message}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        position: "absolute",

        left: 20,
        right: 20,
        bottom: 40,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#222",

        paddingHorizontal: 16,
        paddingVertical: 14,

        borderRadius: 12,

        elevation: 6,

    },

    text: {

        color: "#fff",

        marginLeft: 10,

        flex: 1,

    },

});

*/
import { useEffect, useRef, } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";

export default function Toast({
    visible,
    message,
    type,
    index = 0,
}) {

    if (!visible)
        return null;

    let icon;
    let color;

    switch (type) {

        case "error":
            icon = "close-circle";
            color = Colors.danger;
            break;

        case "warning":
            icon = "warning";
            color = Colors.warning;
            break;

        case "info":
            icon = "information-circle";
            color = Colors.info;
            break;

        default:
            icon = "checkmark-circle";
            color = Colors.success;
            break;

    }

const translateY = useRef(
    new Animated.Value(-20)
).current;

const opacity = useRef(
    new Animated.Value(0)
).current;

useEffect(() => {

    Animated.parallel([

        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }),

        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
        }),

    ]).start();

}, []);
  
    return (

      //<View style={styles.container}>
        <Animated.View
          style={[
              styles.container,
              {
                  opacity,
                  transform: [
                      {
                          translateY,
                      },
                  ],
                  bottom: 40 + index * 72,
              },
          ]}
        >

            <Ionicons
                name={icon}
                size={22}
                color={color}
            />

            <Text style={styles.text}>
                {message}
            </Text>

        </Animated.View>
      //</View>

    );

}

const styles = StyleSheet.create({

    container: {

        position: "absolute",

        left: 20,
        right: 20,
        bottom: 40,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#222",

        paddingHorizontal: 16,
        paddingVertical: 14,

        borderRadius: 12,

        elevation: 6,

    },

    text: {

        flex: 1,

        marginLeft: 10,

        color: "#fff",

    },

});