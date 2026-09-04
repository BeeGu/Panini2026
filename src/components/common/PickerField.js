import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function PickerField({
  label,
  value,
  items = [],
  onValueChange,
  enabled = true,
  searchable = true,
  searchThreshold = 8,
  placeholder,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const selectedItem = useMemo(() => {
    return items.find((item) => String(item.value) === String(value));
  }, [items, value]);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return items;

    return items.filter((item) =>
      item.label?.toString().toLowerCase().includes(query),
    );
  }, [items, search]);

  const showSearch = searchable && items.length >= searchThreshold;

  function openPicker() {
    if (!enabled) return;

    setSearch("");
    setVisible(true);
  }

  function closePicker() {
    setSearch("");
    setVisible(false);
  }

  function handleSelect(item) {
    onValueChange?.(item.value);
    closePicker();
  }

  useEffect(() => {
    if (!visible) {
      setSearch("");
    }
  }, [visible]);

  return (
    <>
      <View
        style={[
          styles.container,
          {
            opacity: enabled ? 1 : 0.6,
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {label}
        </Text>

        <Pressable
          disabled={!enabled}
          onPress={openPicker}
          style={({ pressed }) => [
            styles.field,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
            pressed && enabled && styles.pressed,
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              styles.value,
              {
                color: selectedItem ? colors.text : colors.textMuted,
              },
            ]}
          >
            {selectedItem?.label ?? placeholder ?? t("common.select")}
          </Text>

          <Ionicons name="chevron-down-outline" size={20} color={colors.icon} />
        </Pressable>
      </View>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={closePicker}
      >
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: colors.overlay,
            },
          ]}
        >
          <View
            style={[
              styles.modal,
              {
                backgroundColor: colors.surface,
              },
            ]}
          >
            {/* Header */}

            <View
              style={[
                styles.header,
                {
                  borderBottomColor: colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  {
                    color: colors.text,
                  },
                ]}
              >
                {label}
              </Text>

              <Pressable onPress={closePicker} hitSlop={10}>
                <Ionicons name="close-outline" size={26} color={colors.icon} />
              </Pressable>
            </View>

            {/* Search */}

            {showSearch && (
              <View
                style={[
                  styles.searchContainer,
                  {
                    backgroundColor: colors.background,

                    borderColor: colors.border,
                  },
                ]}
              >
                <Ionicons name="search-outline" size={20} color={colors.icon} />

                <TextInput
                  value={search}
                  onChangeText={setSearch}
                  placeholder={t("common.searchField", {
                    field: label.toLowerCase(),
                  })}
                  placeholderTextColor={colors.textMuted}
                  style={[
                    styles.searchInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCorrect={false}
                  autoCapitalize="none"
                />

                {search.length > 0 && (
                  <Pressable onPress={() => setSearch("")} hitSlop={8}>
                    <Ionicons
                      name="close-circle"
                      size={19}
                      color={colors.textMuted}
                    />
                  </Pressable>
                )}
              </View>
            )}

            {/* Results */}

            <FlatList
              data={filteredItems}
              keyExtractor={(item) => String(item.value)}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={
                filteredItems.length === 0 ? styles.emptyList : styles.list
              }
              renderItem={({ item }) => {
                const selected = String(item.value) === String(value);

                return (
                  <Pressable
                    onPress={() => handleSelect(item)}
                    style={({ pressed }) => [
                      styles.item,
                      {
                        backgroundColor: selected
                          ? `${colors.primary}18`
                          : colors.surface,
                      },
                      pressed && {
                        opacity: 0.7,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.itemText,
                        {
                          color: selected ? colors.primary : colors.text,
                        },
                      ]}
                    >
                      {item.label}
                    </Text>

                    {selected && (
                      <Ionicons
                        name="checkmark"
                        size={21}
                        color={colors.primary}
                      />
                    )}
                  </Pressable>
                );
              }}
              ListEmptyComponent={
                <View style={styles.empty}>
                  <Ionicons
                    name="search-outline"
                    size={32}
                    color={colors.textMuted}
                  />

                  <Text
                    style={[
                      styles.emptyText,
                      {
                        color: colors.textSecondary,
                      },
                    ]}
                  >
                    {t("common.noResults")}
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: Typography.caption,
    marginBottom: 6,
    fontWeight: "600",
  },

  field: {
    minHeight: 48,

    borderWidth: 1,
    borderRadius: 12,

    paddingHorizontal: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  value: {
    flex: 1,

    fontSize: Typography.body,

    marginRight: 10,
  },

  pressed: {
    opacity: 0.75,
  },

  overlay: {
    flex: 1,

    justifyContent: "flex-end",
  },

  modal: {
    maxHeight: "85%",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    paddingBottom: 20,

    overflow: "hidden",
  },

  header: {
    minHeight: 60,

    paddingHorizontal: 18,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  searchContainer: {
    minHeight: 46,

    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 8,

    paddingHorizontal: 12,

    borderWidth: 1,
    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,

    paddingHorizontal: 10,
    paddingVertical: 8,

    fontSize: Typography.body,
  },

  list: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 20,
  },

  item: {
    minHeight: 50,

    paddingHorizontal: 14,

    borderRadius: 10,

    marginVertical: 2,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemText: {
    flex: 1,

    fontSize: Typography.body,

    fontWeight: "500",
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    alignItems: "center",
    padding: 40,
  },

  emptyText: {
    marginTop: 10,

    fontSize: Typography.body,
  },
});
