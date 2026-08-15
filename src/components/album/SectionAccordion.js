// ⭐️ Refactored
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import ProgressBar from "../common/ProgressBar";
import AlbumStats from "./AlbumStats";
import TeamAccordion from "./TeamAccordion";

export default function SectionAccordion({
  section,
  onToggle,
  defaultExpanded = false,
}) {
  const { colors } = useTheme();

  const [expanded, setExpanded] = useState(defaultExpanded);

  function handleToggle() {
    setExpanded((prev) => !prev);
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >
      <Pressable style={styles.header} onPress={handleToggle}>
        <View style={styles.left}>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
              },
            ]}
          >
            {section.name}
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {section.owned} / {section.total}
          </Text>

          <ProgressBar value={section.owned} max={section.total} />

          <AlbumStats
            owned={section.owned}
            total={section.total}
            duplicates={section.duplicates}
          />
        </View>

        <Ionicons
          name={expanded ? "chevron-down" : "chevron-forward"}
          size={22}
          color={colors.textSecondary}
        />
      </Pressable>

      {expanded && (
        <View style={styles.content}>
          {section.teams.map((team, index) => (
            <TeamAccordion
              key={team.id}
              team={team}
              onToggle={onToggle}
              defaultExpanded={index === 0}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.md,
    marginVertical: 8,
    borderRadius: 16,
    elevation: 2,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing.lg,
  },

  left: {
    flex: 1,
  },

  title: {
    fontSize: Typography.h3 ?? 20,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: Typography.body,
  },

  content: {
    paddingBottom: Spacing.sm,
  },
});
