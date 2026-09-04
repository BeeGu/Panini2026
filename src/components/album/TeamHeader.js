import { View, Text, StyleSheet } from "react-native";

import Flag from "../common/Flag";
import AlbumStats from "./AlbumStats";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function TeamHeader({ team }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Flag iso2={team.iso2} size={34} />

          <Text
            style={[
              styles.name,
              {
                color: colors.text,
              },
            ]}
            numberOfLines={1}
          >
            {team.name}
          </Text>
        </View>
      </View>

      <AlbumStats
        owned={team.owned}
        total={team.total}
        duplicates={team.duplicates}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  name: {
    marginLeft: Spacing.md,
    fontSize: Typography.bodyLarge,
    fontWeight: "700",
  },
});
