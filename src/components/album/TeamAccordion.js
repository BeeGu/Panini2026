// ⭐️ Refactored
import { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

import TeamHeader from "./TeamHeader";
import StickerList from "./StickerList";

export default function TeamAccordion({
  team,
  onToggle,
  defaultExpanded = false,
}) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(defaultExpanded);

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <Pressable onPress={toggleExpanded}>
        <TeamHeader team={team} expanded={expanded} />
      </Pressable>

      {expanded && <StickerList stickers={team.stickers} onToggle={onToggle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.sm,
    marginBottom: Spacing.sm,
    borderRadius: 12,
    overflow: "hidden",
  },
});
