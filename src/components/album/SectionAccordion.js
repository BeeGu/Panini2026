import ExpandableCard from "../common/ExpandableCard";

import ProgressBar from "../common/ProgressBar";
import AlbumStats from "./AlbumStats";
import TeamAccordion from "./TeamAccordion";

import useTheme from "../../hooks/useTheme";
import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

import { View, Text, StyleSheet } from "react-native";

export default function SectionAccordion({
  section,
  onToggle,
  defaultExpanded = false,
}) {
  const { colors } = useTheme();

  return (
    <ExpandableCard
      initiallyExpanded={defaultExpanded}
      contentPadding={false}
      showDivider={false}
      headerContent={
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}
              numberOfLines={1}
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
        </View>
      }
    >
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
    </ExpandableCard>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
  },

  headerContent: {
    width: "100%",
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
