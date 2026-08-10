import { View, Text, Switch, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SwitchField from "../../components/common/SwitchField";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function SettingsSwitchItem({
    icon,
    title,
    subtitle,
    value,
    onValueChange,
}) {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.left}>

                <Ionicons
                    name={icon}
                    size={22}
                    color={colors.primary}
                />

                <View style={styles.texts}>
                    <Text
                      style={[
                          styles.title,
                          {
                              color: colors.text,
                          }
                      ]}
                    >
                        {title}
                    </Text>

                    {subtitle && (
                        <Text
                          style={[
                              styles.subtitle,
                              {
                                  color: colors.textSecondary,
                              }
                          ]}
                        >
                            {subtitle}
                        </Text>
                    )}

                </View>
            </View>

          <Switch
                value={value}
                onValueChange={onValueChange}
            />
          {/*<SwitchField
                label="Developer Mode"
                description="Enable developer tools"
                // value={developerMode}
                // onValueChange={toggleDeveloperMode}
                value={value}
                onValueChange={onValueChange}
            />*/}

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
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    texts: {
        marginLeft: 12,
        flex: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
    },

    subtitle: {
        marginTop: 2,
    },

});