// ⭐️ Refactored
import { Pressable, Text, View, StyleSheet } from "react-native";

import Card from "../common/Card";
import Flag from "../common/Flag";
import Badge from "../common/Badge";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";

export default function TradeStickerCard({
  sticker,
  type = "duplicate",
  onPress,
}) {
  const { colors } = useTheme();

  const isDuplicate = type === "duplicate";

  return (
    <Pressable onPress={() => onPress?.(sticker)}>
      <Card>
        <View style={styles.container}>
          <View style={styles.info}>
            <Flag iso2={sticker.team_iso2} size={28} />

            <Text
              style={[
                styles.number,
                {
                  color: colors.primary,
                },
              ]}
            >
              #{sticker.number}
            </Text>

            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}
              numberOfLines={1}
            >
              {sticker.name}
            </Text>
          </View>

          {isDuplicate ? (
            <Badge
              icon="gift"
              text={`x${sticker.duplicates}`}
              color={colors.warning}
            />
          ) : (
            <Badge icon="alert-circle" color={colors.danger} />
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
  },

  name: {
    flex: 1,
    fontSize: Typography.body,
  },
});
