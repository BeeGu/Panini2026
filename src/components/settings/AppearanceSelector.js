
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import {
    Ionicons,
} from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

export default function AppearanceSelector({
    value,
    onChange,
}) {

    const { colors } = useTheme();

    const options = [
        {
            value: "system",
            label: "System",
            icon: "phone-portrait-outline",
        },
        {
            value: "light",
            label: "Light",
            icon: "sunny-outline",
        },
        {
            value: "dark",
            label: "Dark",
            icon: "moon-outline",
        },
    ];

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                },
            ]}
        >

            {options.map(option => {

                const selected =
                    value === option.value;

                return (
                    <Pressable
                        key={option.value}
                        onPress={() =>
                            onChange(option.value)
                        }
                        style={[
                            styles.option,
                            {
                                borderColor: colors.border,
                            },
                            selected && {
                                backgroundColor:
                                    colors.primary,
                                borderColor:
                                    colors.primary,
                            },
                        ]}
                    >

                        <Ionicons
                            name={option.icon}
                            size={20}
                            color={
                                selected
                                    ? "#FFFFFF"
                                    : colors.icon
                            }
                        />

                        <Text
                            style={[
                                styles.label,
                                {
                                    color: selected
                                        ? "#FFFFFF"
                                        : colors.text,
                                },
                            ]}
                        >
                            {option.label}
                        </Text>

                        {selected && (
                            <Ionicons
                                name="checkmark"
                                size={20}
                                color="#FFFFFF"
                            />
                        )}

                    </Pressable>
                );

            })}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 14,
        overflow: "hidden",
    },

    option: {
        minHeight: 52,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 16,

        borderBottomWidth: 1,
    },

    label: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
        fontWeight: "600",
    },

});