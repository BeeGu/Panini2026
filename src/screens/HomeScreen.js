import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useAlbum from "../hooks/useAlbum";

import Typography from "../theme/typography";
import Spacing from "../theme/spacing";

import ScreenHeader from "../components/common/ScreenHeader";
import ProgressCard from "../components/dashboard/ProgressCard";
import DashboardStats from "../components/dashboard/DashboardStats";

import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

import AchievementsCard from "../components/achievements/AchievementsCard";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { stats, recentActivity } = useAlbum();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <ScreenHeader title="🏆 Panini Tracker" subtitle="FIFA World Cup 2026" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProgressCard owned={stats.owned} total={stats.total} />

        <DashboardStats stats={stats} />

        <AchievementsCard owned={stats.owned} total={stats.total} />

        <QuickActions navigation={navigation} />

        <RecentActivity stickers={recentActivity} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingVertical: 24,
    alignItems: "center",
    paddingBottom: 40,
  },
});
