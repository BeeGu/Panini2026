
import { View, Text, Switch, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

// import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function SwitchField({
    label,
    value,
    onChange,
    description,
    disabled = false,
}) {

    const { colors } = useTheme();

    return (

        <View style={styles.container}>

            <View style={styles.left}>

                <Text
                  style={[
                      styles.label,
                      {
                          color: colors.textSecondary,
                      },
                  ]}
                >
                    {label}
                </Text>

                {description && (
                    <Text
                      style={[
                          styles.description,
                          {
                              color: colors.textSecondary,
                          },
                      ]}
                    >
                        {description}
                    </Text>
                )}

            </View>

            <Switch
                value={value}
                onValueChange={onChange}
                disabled={disabled}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Spacing.md,
    },

    left: {
        flex: 1,
        paddingRight: Spacing.md,
    },

    label: {
        fontSize: Typography.caption,
        // color: Colors.textSecondary,
        marginBottom: 6,
        fontWeight: "600",
    },

    description: {
        marginTop: 2,
        fontSize: Typography.caption,
        // color: Colors.textSecondary,
    },

});