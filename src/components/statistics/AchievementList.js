// ⭐️ Refactored

import AchievementCard from "./AchievementCard";

export default function AchievementList({ achievements }) {
  return (
    <>
      {achievements.map((achievement) => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </>
  );
}
