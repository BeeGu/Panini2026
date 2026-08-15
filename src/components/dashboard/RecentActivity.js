import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function RecentActivity({ stickers, color }) {
  const { colors } = useTheme();
  const iconColor = color ?? colors.primary;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        Recent activity
      </Text>

      {stickers.length === 0 ? (
        <Text
          style={[
            styles.empty,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          No stickers collected yet.
        </Text>
      ) : (
        stickers.map((sticker) => (
          <View key={sticker.id} style={styles.item}>
            <Ionicons name="checkmark-circle" size={18} color={iconColor} />

            <Text
              style={[
                styles.text,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              #{sticker.number} {sticker.name}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 24,
    borderRadius: 16,
    padding: Spacing.lg,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  text: {
    marginLeft: 10,
  },

  empty: {},
});
