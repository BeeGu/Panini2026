import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

// import Colors from "../../theme/colors";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function FieldContainer({
    label,
    children,
    disabled = false,
}) {

    const { colors } = useTheme();
  
    return (

        <View style={styles.container}>

            {label && (
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
            )}

            <View
                style={[
                    styles.field,
                    {
                        backgroundColor: colors.surface,
                        borderColor: colors.border,
                    },
                    disabled && styles.disabled,
                ]}
            >
                {children}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginBottom: Spacing.lg,
    },

    label: {
        fontSize: Typography.caption,
        // color: Colors.textSecondary,
        marginBottom: 6,
        fontWeight: "600",
    },

    field: {
        // backgroundColor: Colors.surface,
        borderWidth: 1,
        // borderColor: Colors.border,
        borderRadius: 12,
        overflow: "hidden",
    },

    disabled: {
        opacity: 0.6,
    },

});