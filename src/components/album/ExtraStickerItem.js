import { useTranslation } from "react-i18next";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Flag from "../common/Flag";

import useTheme from "../../hooks/useTheme";
import Spacing from "../../theme/spacing";

const TYPE_CONFIG = {
  regular: {
    translationKey: "album.types.regular",
    themeKey: "extraRegular",
  },

  bronze: {
    translationKey: "album.types.bronze",
    themeKey: "extraBronze",
  },

  silver: {
    translationKey: "album.types.silver",
    themeKey: "extraSilver",
  },

  gold: {
    translationKey: "album.types.gold",
    themeKey: "extraGold",
  },
};

export default function ExtraStickerItem({ item, onToggle }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.header}>
        {/*
        <Text style={styles.flag}>{getFlagEmoji(item.team_iso2)}</Text>
        */}
        <Flag iso2={item.team_iso2} size={38} />

        <View style={styles.info}>
          <Text
            style={[
              styles.team,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {item.team}
          </Text>

          <Text
            style={[
              styles.name,
              {
                color: colors.text,
              },
            ]}
          >
            {item.name}
          </Text>
        </View>
      </View>

      <View style={styles.variants}>
        {item.variants.map(({ type, sticker }) => {
          if (!sticker) {
            return null;
          }

          const owned = !!sticker.owned;
          const config = TYPE_CONFIG[type] ?? TYPE_CONFIG.regular;
          const typeColors = colors[config.themeKey];

          return (
            <Pressable
              key={type}
              onPress={() => onToggle(sticker.id)}
              style={({ pressed }) => [
                styles.variant,
                {
                  backgroundColor: owned
                    ? typeColors.selected
                    : typeColors.background,
                  borderColor: typeColors.border,
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.variantText,
                  {
                    color: owned ? colors.textOnPrimary : typeColors.text,
                  },
                ]}
              >
                {owned ? "✓ " : ""}
                {t(config.translationKey)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function getFlagEmoji(iso2) {
  if (!iso2 || iso2.length !== 2) {
    return "🌐";
  }

  return iso2
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  flag: {
    fontSize: 30,
    marginRight: Spacing.sm,
  },

  info: {
    flex: 1,
  },

  team: {
    fontSize: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    // marginTop: 2,
  },

  variants: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.xs,
    marginTop: Spacing.md,
  },

  variant: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },

  variantText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
