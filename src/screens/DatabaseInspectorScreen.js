import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import db from "../database/db";
import useTheme from "../hooks/useTheme";
import Spacing from "../theme/spacing";
import Typography from "../theme/typography";

import Button from "../components/common/Button";

const TABLES = {
  sections: {
    labelKey: "databaseInspector.tables.sections",

    query: `
      SELECT
        id,
        code,
        name,
        sort_order
      FROM sections
      ORDER BY
        sort_order,
        id
    `,
  },

  teams: {
    labelKey: "databaseInspector.tables.teams",

    query: `
      SELECT
        id,
        section_id,
        code,
        iso2,
        name,
        sort_order
      FROM teams
      ORDER BY
        sort_order,
        id
    `,
  },

  stickers: {
    labelKey: "databaseInspector.tables.stickers",

    query: `
      SELECT
        id,
        code,
        number,
        type,
        name,
        owned,
        duplicates,
        section_id,
        team_id,
        obtained_at,
        updated_at
      FROM stickers
      ORDER BY
        section_id,
        team_id,
        number,
        CASE type
          WHEN 'regular' THEN 1
          WHEN 'bronze' THEN 2
          WHEN 'silver' THEN 3
          WHEN 'gold' THEN 4
          ELSE 99
        END,
        id
    `,
  },
};

const STICKER_COLUMNS = [
  "id",
  "code",
  "number",
  "type",
  "name",
  "owned",
  "duplicates",
  "section_id",
  "team_id",
  "obtained_at",
  "updated_at",
];

export default function DatabaseInspectorScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const [selectedTable, setSelectedTable] = useState("stickers");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [summary, setSummary] = useState(null);

  const loadTable = useCallback((tableName) => {
    const table = TABLES[tableName];

    if (!table) {
      return;
    }

    setSelectedTable(tableName);
    setLoading(true);
    setError(null);
    setSearch("");

    try {
      const result = db.getAllSync(table.query);

      setRows(result);

      if (tableName === "stickers") {
        loadStickerSummary();
      } else {
        setSummary(null);
      }
    } catch (err) {
      console.error(`[DatabaseInspector] Failed to load ${tableName}:`, err);

      setRows([]);

      setError(err?.message || `Failed to load table ${tableName}`);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadStickerSummary() {
    try {
      const typeStats = db.getAllSync(`
        SELECT
          type,
          COUNT(*) AS total
        FROM stickers
        GROUP BY type
        ORDER BY
          CASE type
            WHEN 'regular' THEN 1
            WHEN 'bronze' THEN 2
            WHEN 'silver' THEN 3
            WHEN 'gold' THEN 4
            ELSE 99
          END
      `);

      const collectionStats = db.getFirstSync(`
        SELECT
          COUNT(*) AS total,
          COALESCE(SUM(owned), 0) AS owned,
          COALESCE(SUM(duplicates), 0) AS duplicates
        FROM stickers
      `);

      const extraStats = db.getFirstSync(`
        SELECT
          COUNT(*) AS total
        FROM stickers s
        INNER JOIN sections sec
          ON sec.id = s.section_id
        WHERE sec.code = 'EXTRA'
      `);

      setSummary({
        types: typeStats,
        collection: collectionStats,
        extra: extraStats,
      });
    } catch (err) {
      console.error("[DatabaseInspector] Failed to load sticker summary:", err);

      setSummary(null);
    }
  }

  useEffect(() => {
    loadTable("stickers");
  }, [loadTable]);

  const filteredRows = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return rows;
    }

    return rows.filter((row) => {
      return Object.values(row).some((item) =>
        String(item ?? "")
          .toLowerCase()
          .includes(value),
      );
    });
  }, [rows, search]);

  const columns = useMemo(() => {
    if (selectedTable === "stickers") {
      return STICKER_COLUMNS;
    }

    if (rows.length === 0) {
      return [];
    }

    return Object.keys(rows[0]);
  }, [selectedTable, rows]);

  function renderRow({ item, index }) {
    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor:
              index % 2 === 0 ? colors.surface : colors.background,

            borderBottomColor: colors.border,
          },
        ]}
      >
        {columns.map((column) => (
          <View
            key={column}
            style={[
              styles.cell,
              {
                borderRightColor: colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.cellText,
                {
                  color: colors.text,
                },
              ]}
              numberOfLines={3}
            >
              {formatValue(item[column])}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: colors.card,
            borderBottomColor: colors.border,
          },
        ]}
      >
        {columns.map((column) => (
          <View
            key={column}
            style={[
              styles.cell,
              styles.headerCell,
              {
                borderRightColor: colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.headerText,
                {
                  color: colors.text,
                },
              ]}
            >
              {column}
            </Text>
          </View>
        ))}
      </View>
    );
  }

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
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.surface,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <View style={styles.headerIcon}>
          <Ionicons name="server-outline" size={28} color={colors.primary} />
        </View>

        <View style={styles.headerInfo}>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
              },
            ]}
          >
            Database Inspector
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            SQLite · panini2026.db
          </Text>
        </View>
      </View>

      {/* Table selector */}
      <View
        style={[
          styles.tableSelector,
          {
            backgroundColor: colors.surface,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tableSelectorContent}
        >
          {Object.entries(TABLES).map(([tableName, table]) => {
            const selected = selectedTable === tableName;

            return (
              <Pressable
                key={tableName}
                onPress={() => loadTable(tableName)}
                style={[
                  styles.tableButton,
                  {
                    backgroundColor: selected
                      ? colors.primary
                      : colors.background,

                    borderColor: selected ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tableButtonText,
                    {
                      color: selected ? colors.textOnPrimary : colors.text,
                    },
                  ]}
                >
                  {t(table.labelKey)}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Sticker summary */}
      {selectedTable === "stickers" && summary && (
        <View
          style={[
            styles.summary,
            {
              backgroundColor: colors.surface,
              borderBottomColor: colors.border,
            },
          ]}
        >
          <View style={styles.summaryTitleRow}>
            <Text
              style={[
                styles.summaryTitle,
                {
                  color: colors.text,
                },
              ]}
            >
              {t("databaseInspector.summary.title")}
            </Text>

            <Text
              style={[
                styles.summaryTotal,
                {
                  color: colors.primary,
                },
              ]}
            >
              {summary.collection.total}
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.summaryCards}>
              <SummaryCard
                title={t("databaseInspector.summary.regular")}
                value={getTypeCount(summary.types, "regular")}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.bronze")}
                value={getTypeCount(summary.types, "bronze")}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.silver")}
                value={getTypeCount(summary.types, "silver")}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.gold")}
                value={getTypeCount(summary.types, "gold")}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.extra")}
                value={summary.extra.total}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.owned")}
                value={summary.collection.owned}
                colors={colors}
              />

              <SummaryCard
                title={t("databaseInspector.summary.duplicates")}
                value={summary.collection.duplicates}
                colors={colors}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {/* Search */}
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: colors.surface,
          },
        ]}
      >
        <View
          style={[
            styles.searchBox,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
            },
          ]}
        >
          <Ionicons name="search-outline" size={20} color={colors.textMuted} />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder={t("databaseInspector.searchPlaceholder", {
              table: t(TABLES[selectedTable].labelKey),
            })}
            placeholderTextColor={colors.textMuted}
            style={[
              styles.searchInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <Ionicons
                name="close-circle"
                size={20}
                color={colors.textMuted}
              />
            </Pressable>
          )}
        </View>
      </View>

      {/* Database content */}
      <View style={styles.content}>
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={colors.primary} />

            <Text
              style={[
                styles.loadingText,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {t("databaseInspector.loading", {
                table: t(TABLES[selectedTable].labelKey),
              })}
            </Text>
          </View>
        ) : error ? (
          <View style={styles.center}>
            <Ionicons
              name="alert-circle-outline"
              size={48}
              color={colors.danger}
            />

            <Text
              style={[
                styles.errorTitle,
                {
                  color: colors.text,
                },
              ]}
            >
              {t("databaseInspector.error.title")}
            </Text>

            <Text
              style={[
                styles.errorText,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {error}
            </Text>
          </View>
        ) : filteredRows.length === 0 ? (
          <View style={styles.center}>
            <Ionicons
              name="search-outline"
              size={48}
              color={colors.textMuted}
            />

            <Text
              style={[
                styles.emptyTitle,
                {
                  color: colors.text,
                },
              ]}
            >
              {t("databaseInspector.empty.title")}
            </Text>

            <Text
              style={[
                styles.emptyText,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {t("databaseInspector.empty.message")}
            </Text>
          </View>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            contentContainerStyle={styles.horizontalContent}
          >
            <View>
              {renderHeader()}

              <FlatList
                data={filteredRows}
                keyExtractor={(item, index) =>
                  `${selectedTable}-${item.id ?? index}`
                }
                renderItem={renderRow}
                showsVerticalScrollIndicator
                initialNumToRender={30}
                maxToRenderPerBatch={30}
                windowSize={10}
                removeClippedSubviews
              />
            </View>
          </ScrollView>
        )}
      </View>

      {/* Footer */}
      <View
        style={[
          styles.footer,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            paddingBottom: Math.max(insets.bottom, Spacing.sm),
          },
        ]}
      >
        <Text
          style={[
            styles.footerText,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {search
            ? t("databaseInspector.footerFiltered", {
                table: t(TABLES[selectedTable].labelKey),
                filtered: filteredRows.length,
                total: rows.length,
              })
            : t("databaseInspector.footer", {
                table: t(TABLES[selectedTable].labelKey),
                count: filteredRows.length,
              })}
        </Text>

        <Button
          title={t("databaseInspector.refresh")}
          icon="refresh-outline"
          size="small"
          onPress={() => loadTable(selectedTable)}
        />
      </View>
    </SafeAreaView>
  );
}

function SummaryCard({ title, value, colors }) {
  return (
    <View
      style={[
        styles.summaryCard,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.summaryCardValue,
          {
            color: colors.text,
          },
        ]}
      >
        {value}
      </Text>

      <Text
        style={[
          styles.summaryCardTitle,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

function getTypeCount(types, type) {
  const item = types.find((row) => row.type === type);

  return item?.total ?? 0;
}

function formatValue(value) {
  if (value === null || value === undefined) {
    return "NULL";
  }

  return String(value);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },

  headerIcon: {
    marginRight: Spacing.sm,
  },

  headerInfo: {
    flex: 1,
  },

  title: {
    fontSize: Typography.h2 ?? 22,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 2,
    fontSize: Typography.body,
  },

  tableSelector: {
    borderBottomWidth: 1,
  },

  tableSelectorContent: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
  },

  tableButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },

  tableButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },

  summary: {
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
  },

  summaryTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
    marginBottom: 6,
  },

  summaryTitle: {
    fontSize: 14,
    fontWeight: "700",
  },

  summaryTotal: {
    fontSize: 18,
    fontWeight: "800",
  },

  summaryCards: {
    flexDirection: "row",
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
  },

  summaryCard: {
    minWidth: 78,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },

  summaryCardValue: {
    fontSize: 17,
    fontWeight: "800",
  },

  summaryCardTitle: {
    marginTop: 2,
    fontSize: 11,
  },

  searchContainer: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },

  searchBox: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    paddingVertical: 7,
  },

  content: {
    flex: 1,
  },

  horizontalContent: {
    minWidth: "100%",
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },

  cell: {
    width: 150,
    minHeight: 44,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
    borderRightWidth: 1,
  },

  headerCell: {
    minHeight: 48,
  },

  headerText: {
    fontSize: 13,
    fontWeight: "700",
  },

  cellText: {
    fontSize: 12,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.xl,
  },

  loadingText: {
    marginTop: Spacing.md,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: Spacing.md,
  },

  emptyText: {
    textAlign: "center",
    marginTop: Spacing.sm,
  },

  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: Spacing.md,
  },

  errorText: {
    textAlign: "center",
    marginTop: Spacing.sm,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
  },

  footerText: {
    fontSize: 13,
  },
});
