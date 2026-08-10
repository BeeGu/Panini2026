import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import AchievementCard from "./AchievementCard";

import Spacing from "../../theme/spacing";

export default function AchievementsCard({ owned = 0, total = 0 }) {
  const { colors } = useTheme();

  const percentage = total > 0 ? (owned / total) * 100 : 0;

  const achievements = [
    {
      id: 25,
      icon: "flag-outline",
      title: "Getting Started",
      description: "Collect 25% of the album",
      threshold: 25,
    },

    {
      id: 50,
      icon: "trophy-outline",
      title: "Halfway There",
      description: "Collect 50% of the album",
      threshold: 50,
    },

    {
      id: 75,
      icon: "medal-outline",
      title: "Almost Complete",
      description: "Collect 75% of the album",
      threshold: 75,
    },

    {
      id: 100,
      icon: "star-outline",
      title: "Album Complete",
      description: "Collect every sticker",
      threshold: 100,
    },
  ];

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        Achievements
      </Text>

      <Text
        style={[
          styles.subtitle,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        Track your collection milestones
      </Text>

      {achievements.map((achievement) => {
        /*
         * Special handling for 100%.
         *
         * It should only be unlocked when
         * the album is actually complete.
         */
        const unlocked =
          achievement.threshold === 100
            ? owned === total && total > 0
            : percentage >= achievement.threshold;

        /*
         * Progress toward this specific milestone.
         *
         * Example:
         *
         * album = 37%
         * 25% achievement -> 100%
         * 50% achievement -> 74%
         */
        const achievementProgress = Math.min(
          (percentage / achievement.threshold) * 100,
          100,
        );

        return (
          <AchievementCard
            key={achievement.id}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
            unlocked={unlocked}
            progress={achievementProgress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: Spacing.lg,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    marginBottom: Spacing.md,
    fontSize: 13,
  },
});
