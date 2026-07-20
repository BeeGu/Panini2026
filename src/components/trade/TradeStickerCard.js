/*
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Row from "../common/Row";
import Flag from "../common/Flag";
import Badge from "../common/Badge";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";

export default function TradeStickerCard({
    sticker,
    type = "duplicate",
    onPress,
}) {

    return (

        <Pressable
            onPress={() => onPress?.(sticker)}
        >

          <Card>
              <Row>
                  <Row
                      style={styles.left}
                      justify="flex-start"
                      gap={10}
                  >
          
                      <Flag
                          iso2={sticker.team_iso2}
                          size={28}
                      />
          
                      <Text style={styles.number}>
                          #{sticker.number}
                      </Text>
          
                      <Text
                          style={styles.name}
                          numberOfLines={1}
                      >
                          {sticker.name}
                      </Text>
          
                  </Row>
          
                  <Row
                      style={styles.right}
                      justify="flex-end"
                      gap={4}
                  >
          
                      {type === "duplicate" ? (
                          <>
                              <Ionicons
                                  name="gift"
                                  size={18}
                                  color={Colors.warning}
                              />
          
                              <Text style={styles.qty}>
                                  x{sticker.duplicates}
                              </Text>
                          </>
                      ) : (
                          <Ionicons
                              name="alert-circle"
                              size={18}
                              color={Colors.danger}
                          />
                      )}
          
                  </Row>
          
              </Row>
          </Card>

        </Pressable>

    );

}

const styles = StyleSheet.create({

    number: {
        width: 36,
        fontWeight: "700",
        color: Colors.primary,
    },

    name: {
        flex: 1,
        fontSize: Typography.body,
    },

    qty: {
        fontWeight: "700",
        color: Colors.warning,
    },

left: {
    flex: 1,
},

right: {
    marginLeft: 12,
    minWidth: 55,
},

// content: {
//     : "row",
//     alignItems: "center",
// },

// info: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
// },

// actions: {
//     width: 60,
//     alignItems: "flex-end",
// },

});
*/

import { Pressable, Text, View, StyleSheet } from "react-native";

import Card from "../common/Card";
import Flag from "../common/Flag";
import Badge from "../common/Badge";

import Colors from "../../theme/colors";
import Typography from "../../theme/typography";

export default function TradeStickerCard({
    sticker,
    type = "duplicate",
    onPress,
}) {

    return (

        <Pressable onPress={() => onPress?.(sticker)}>

            <Card>

                <View style={styles.container}>

                    <View style={styles.info}>

                        <Flag
                            iso2={sticker.team_iso2}
                            size={28}
                        />

                        <Text style={styles.number}>
                            #{sticker.number}
                        </Text>

                        <Text
                            style={styles.name}
                            numberOfLines={1}
                        >
                            {sticker.name}
                        </Text>

                    </View>

                    {type === "duplicate" ? (

                        <Badge
                            icon="gift"
                            text={`x${sticker.duplicates}`}
                            color={Colors.warning}
                        />

                    ) : (

                        <Badge
                            icon="alert-circle"
                            // text="Missing"
                            color={Colors.danger}
                        />

                    )}

                </View>

            </Card>

        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
    },

    info: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      marginRight: 12,
    },

    number: {
        width: 42,
        marginLeft: 10,
        fontWeight: "700",
        color: Colors.primary,
    },

    name: {
        flex: 1,
        fontSize: Typography.body,
    },

});
