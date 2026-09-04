// src/components/settings/LanguageSelector.js

import { useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import { LANGUAGES } from "../../i18n/languages";

export default function LanguageSelector({
  title = "Language",
  subtitle = "Choose application language",
  value,
  onChange,
  color,
}) {
  const { colors } = useTheme();
  const iconColor = color ?? colors.primary;
  const [visible, setVisible] = useState(false);

  const selectedLanguage =
    LANGUAGES.find((language) => language.code === value) || LANGUAGES[0];

  function handleSelect(code) {
    setVisible(false);
    onChange?.(code);
  }

  return (
    <>
      {/* Settings item */}
      <Pressable
        onPress={() => setVisible(true)}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: colors.card,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="globe-outline" size={22} color={iconColor} />

          <View style={styles.content}>
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

            {subtitle && (
              <Text
                style={[
                  styles.subtitle,
                  {
                    color: colors.textSecondary,
                  },
                ]}
              >
                {subtitle}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.flag}>{selectedLanguage.flag}</Text>

          <Text
            style={[
              styles.code,
              {
                color: colors.text,
              },
            ]}
          >
            {selectedLanguage.code.toUpperCase()}
          </Text>
          <Ionicons name="chevron-forward" size={18} color={colors.icon} />
        </View>
      </Pressable>

      {/* Language modal */}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable
          style={[
            styles.overlay,
            {
              backgroundColor: colors.overlay,
            },
          ]}
          onPress={() => setVisible(false)}
        >
          <Pressable
            style={[
              styles.modal,
              {
                backgroundColor: colors.card,
              },
            ]}
            onPress={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <View style={styles.modalHeader}>
              <View>
                <Text
                  style={[
                    styles.modalTitle,
                    {
                      color: colors.text,
                    },
                  ]}
                >
                  {title}
                </Text>

                <Text
                  style={[
                    styles.modalSubtitle,
                    {
                      color: colors.textSecondary,
                    },
                  ]}
                >
                  {subtitle}
                </Text>
              </View>

              <Pressable onPress={() => setVisible(false)} hitSlop={10}>
                <Ionicons
                  name="close-outline"
                  size={26}
                  color={colors.textSecondary}
                />
              </Pressable>
            </View>

            {/* Languages */}
            <View style={styles.languages}>
              {LANGUAGES.map((language) => {
                const selected = language.code === selectedLanguage.code;

                return (
                  <Pressable
                    key={language.code}
                    onPress={() => handleSelect(language.code)}
                    style={({ pressed }) => [
                      styles.language,
                      {
                        backgroundColor: selected
                          ? colors.background
                          : "transparent",
                        borderColor: selected ? colors.primary : colors.border,
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View style={styles.languageLeft}>
                      <Text style={styles.languageFlag}>{language.flag}</Text>

                      <View>
                        <Text
                          style={[
                            styles.languageCode,
                            {
                              color: colors.text,
                            },
                          ]}
                        >
                          {language.code.toUpperCase()}
                        </Text>

                        <Text
                          style={[
                            styles.languageName,
                            {
                              color: colors.textSecondary,
                            },
                          ]}
                        >
                          {language.name}
                        </Text>
                      </View>
                    </View>

                    {selected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={22}
                        color={colors.primary}
                      />
                    )}
                  </Pressable>
                );
              })}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 68,
    paddingVertical: Spacing.sm,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    width: 40,
    justifyContent: "center",
    marginRight: Spacing.sm,

    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  content: {
    marginLeft: 12,
    flex: 1,
  },

  title: {
    fontSize: Typography.body,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: Typography.caption,
    marginTop: 3,
  },

  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Spacing.sm,
  },

  flag: {
    fontSize: 22,
    marginRight: 6,
  },

  code: {
    fontSize: Typography.body,
    fontWeight: "700",
    marginRight: 6,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  modal: {
    borderRadius: 18,
    padding: Spacing.md,
    maxHeight: "80%",
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
  },

  modalTitle: {
    fontSize: Typography.h3 ?? 20,
    fontWeight: "700",
  },

  modalSubtitle: {
    fontSize: Typography.caption,
    marginTop: 3,
  },

  languages: {
    gap: Spacing.sm,
  },

  language: {
    minHeight: 58,
    paddingHorizontal: Spacing.md,
    borderWidth: 1,
    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  languageLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  languageFlag: {
    fontSize: 28,
    marginRight: Spacing.md,
  },

  languageCode: {
    fontSize: Typography.body,
    fontWeight: "700",
  },

  languageName: {
    fontSize: Typography.caption,
    marginTop: 2,
  },
});
