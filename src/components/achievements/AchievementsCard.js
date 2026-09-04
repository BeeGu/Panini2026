import { useTranslation } from "react-i18next";

import { View, Text, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";

import AchievementCard from "./AchievementCard";

import Spacing from "../../theme/spacing";

export default function AchievementsCard({
  title,
  subTitle,
  owned = 0,
  total = 0,
}) {
  const { t } = useTranslation();

  const { colors } = useTheme();

  const percentage = total > 0 ? (owned / total) * 100 : 0;

  const achievements = [
    {
      id: 25,
      icon: "flag-outline",
      title: t("achievements.gettingStarted.title"),
      description: t("achievements.gettingStarted.description"),
      threshold: 25,
    },

    {
      id: 50,
      icon: "trophy-outline",
      title: t("achievements.halfwayThere.title"),
      description: t("achievements.halfwayThere.description"),
      threshold: 50,
    },

    {
      id: 75,
      icon: "medal-outline",
      title: t("achievements.almostComplete.title"),
      description: t("achievements.almostComplete.description"),
      threshold: 75,
    },

    {
      id: 100,
      icon: "star-outline",
      title: t("achievements.albumComplete.title"),
      description: t("achievements.albumComplete.description"),
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
        {title}
      </Text>

      <Text
        style={[
          styles.subtitle,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {subTitle}
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
