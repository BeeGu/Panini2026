import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import MenuCard from "../components/common/MenuCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import useAlbum from "../hooks/useAlbum";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import DashboardStats from "../components/dashboard/DashboardStats";
import Colors from "../theme/colors";
import Spacing from "../theme/spacing";
import QuickActions from "../components/dashboard/QuickActions";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { stats, recentActivity } = useAlbum();
  // console.log("🔰 HomeScreen useAlbum hook", { stats });

  return (
    <SafeAreaView
      style={styles.container}
    >

        <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >

            <DashboardHeader
                title="🏆 Panini Tracker"
                subtitle="FIFA World Cup 2026"
                // subtitle="UEFA Euro 2028"
            />

            <ProgressCard
                owned={stats.owned}
                total={stats.total}
            />
      
            <DashboardStats
                stats={stats}
            />

            <QuickActions
                navigation={navigation}
            />

            <RecentActivity
              stickers={recentActivity}
            />
          
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  content: {
      paddingVertical: 24,
      alignItems: "center",
      paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0057B8",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },

  row: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 16,
  },
});