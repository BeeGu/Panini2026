import { View, StyleSheet } from "react-native";

export default function Column({
    children,
    style,
    align = "stretch",
    justify = "flex-start",
    gap = 0,
}) {

    return (

        <View
            style={[
                styles.column,
                {
                    alignItems: align,
                    justifyContent: justify,
                    gap,
                },
                style,
            ]}
        >
            {children}
        </View>

    );

}

const styles = StyleSheet.create({

    column: {
        flexDirection: "column",
    },

});