import { ScrollView, StyleSheet } from "react-native";

import FilterChip from "../common/FilterChip";

import { FILTERS } from "../../constants/filters";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

export default function AlbumFilters({ filter, setFilter, stats }) {
  const { colors } = useTheme();

  const filters = [
    {
      key: FILTERS.ALL,
      title: `All (${stats.total})`,
    },
    {
      key: FILTERS.MISSING,
      title: `Missing (${stats.missing})`,
    },
    {
      key: FILTERS.OWNED,
      title: `Owned (${stats.owned})`,
    },
    {
      key: FILTERS.DUPLICATES,
      title: `Duplicates (${stats.duplicates})`,
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >
      {filters.map((item) => (
        <FilterChip
          key={item.key}
          title={item.title}
          selected={filter === item.key}
          onPress={() => setFilter(item.key)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 88,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
  },
});
