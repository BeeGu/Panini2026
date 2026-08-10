import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

import { formatRelativeDate } from "../../utils/dateUtils";

export default function StatisticsRecentActivity({
    activity,
}) {
    const { colors } = useTheme();

    return (

        <View
          style={[
              styles.card,
              {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
              },
          ]}
        >
            {activity.map(item => (
                <View
                    key={item.id}
                    style={styles.row}
                >

                    <Ionicons
                        name="time-outline"
                        size={20}
                        color={colors.primary}
                    />

                    <View style={styles.info}>

                        <Text
                          style={[
                              {
                                  color: colors.text,
                              },
                          ]}
                        >
                            {item.name}
                        </Text>

                        <Text
                          style={[
                              styles.date,
                              {
                                  color: colors.textSecondary,
                              },
                          ]}
                        >
                            {formatRelativeDate(item.updated_at)}
                        </Text>

                    </View>

                </View>

            ))}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {
        // margin: Spacing.md,
        padding: Spacing.lg,
        borderRadius: 16,
        elevation: 2,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    info: {
        marginLeft: 12,
    },

    date: {
        fontSize: 12,
    },

});