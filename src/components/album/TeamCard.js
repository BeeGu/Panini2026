import { Pressable, StyleSheet, View } from "react-native";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

import TeamHeader from "./TeamHeader";

export default function TeamCard({
    team,
    owned,
    total,
    expanded,
    onPress,
    children,
}) {

    return (

        <View style={styles.card}>

            <Pressable onPress={onPress}>

                <TeamHeader
                    team={team}
                    owned={owned}
                    total={total}
                />

            </Pressable>

            {expanded && children}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        marginHorizontal: Spacing.md,
        marginVertical: 6,
        backgroundColor: Colors.white,
        borderRadius: 14,
        padding: Spacing.md,
        elevation: 2,
    },

});