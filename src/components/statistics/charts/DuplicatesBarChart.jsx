import { View, Text } from "react-native";

import Card from "../../common/Card";
import useTheme from "../../../hooks/useTheme";

export default function DuplicatesBarChart({
    data,
}) {

    const { colors } = useTheme();

    const max =
        Math.max(...data.map(x => x.value), 1);

    return (

        <Card title="Duplicates">

            {data.map(item => (

                <View
                    key={item.label}
                    style={{
                        marginBottom: 12,
                    }}
                >

                    <Text
                        style={{
                            color: colors.text,
                            marginBottom: 4,
                        }}
                    >
                        {item.label}
                    </Text>

                    <View
                        style={{
                            height: 12,
                            backgroundColor:
                                colors.border,
                            borderRadius: 6,
                        }}
                    >

                        <View
                            style={{
                                width:
                                    `${item.value / max * 100}%`,
                                height: 12,
                                borderRadius: 6,
                                backgroundColor:
                                    colors.primary,
                            }}
                        />

                    </View>

                </View>

            ))}

        </Card>

    );

}