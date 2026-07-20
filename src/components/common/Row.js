/*
Exemple de utilizare
Row clasic

În loc de

<View style={styles.row}>
    ...
</View>

scrii

<Row>

    ...

</Row>

Elemente apropiate
<Row gap={8} justify="flex-start">

    <Flag iso2="ro" />

    <Text>Romania</Text>

</Row>
Centrare
<Row justify="center">

    <ActivityIndicator />

</Row>
Distribuire egală
<Row justify="space-around">

    ...

</Row>
Aliniere sus
<Row align="flex-start">

    ...

</Row>
*/

import { View, StyleSheet } from "react-native";

export default function Row({
    children,
    style,
    justify = "space-between",
    align = "center",
    gap = 0,
}) {

    return (

        <View
            style={[
                styles.row,
                {
                    justifyContent: justify,
                    alignItems: align,
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

    row: {
        flexDirection: "row",
    },

});