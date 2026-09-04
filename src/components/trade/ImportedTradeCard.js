// src/components/trade/ImportedTradeCard.js

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import ExpandableCard from "../common/ExpandableCard";
import SearchBar from "../common/SearchBar";
import StickerInfo from "../stickers/StickerInfo";
import Badge from "../common/Badge";

import sortTradeStickers from "../../utils/sortTradeStickers";

function TradeStickerItem({ sticker, type }) {
  const { colors } = useTheme();

  const isReceive = type === "receive";

  return (
    <View
      style={[
        styles.stickerItem,
        {
          borderBottomColor: colors.border,
        },
      ]}
    >
      <StickerInfo sticker={sticker.mySticker} showDuplicates={false} />

      <View style={styles.itemRight}>
        {isReceive ? (
          <Badge
            icon="gift"
            text={`×${sticker.quantity}`}
            color={colors.success}
          />
        ) : (
          <Badge
            icon="documents"
            text={`+${sticker.mySticker.duplicates}`}
            color={colors.warning}
          />
        )}
      </View>
    </View>
  );
}

function TradeStickerList({ stickers, type, emptyText }) {
  const { colors } = useTheme();

  if (stickers.length === 0) {
    return (
      <View style={styles.empty}>
        <Text
          style={[
            styles.emptyText,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {emptyText}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        {
          borderColor: colors.border,
        },
      ]}
      nestedScrollEnabled
      showsVerticalScrollIndicator
    >
      {stickers.map((sticker) => (
        <TradeStickerItem key={sticker.code} sticker={sticker} type={type} />
      ))}
    </ScrollView>
  );
}

function filterTradeStickers(stickers, search) {
  const value = search.trim().toLowerCase();

  if (!value) {
    return stickers;
  }

  return stickers.filter((sticker) => {
    const mine = sticker.mySticker;

    return [
      sticker.code,
      sticker.number,
      sticker.name,
      sticker.team,
      sticker.team_iso2,
      mine?.code,
      mine?.number,
      mine?.name,
      mine?.team,
      mine?.team_iso2,
    ]
      .filter(Boolean)
      .some((field) => String(field).toLowerCase().includes(value));
  });
}

function TradeStickerRow({ sticker, quantity, badgeType }) {
  const { colors } = useTheme();

  const displaySticker = sticker.mySticker ?? sticker;

  return (
    <View
      style={[
        styles.row,
        {
          borderBottomColor: colors.border,
        },
      ]}
    >
      <StickerInfo sticker={displaySticker} showDuplicates={false} />

      <Badge
        icon={badgeType === "receive" ? "gift" : "documents"}
        text={badgeType === "receive" ? `×${quantity}` : `+${quantity}`}
        color={badgeType === "receive" ? colors.success : colors.primary}
      />
    </View>
  );
}

export default function ImportedTradeCard({ trade }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [receiveSearch, setReceiveSearch] = useState("");
  const [giveSearch, setGiveSearch] = useState("");

  const canReceive = useMemo(() => {
    return sortTradeStickers(
      filterTradeStickers(trade.canReceive, receiveSearch),
    );
  }, [trade.canReceive, receiveSearch]);

  const canGive = useMemo(() => {
    return sortTradeStickers(filterTradeStickers(trade.canGive, giveSearch));
  }, [trade.canGive, giveSearch]);

  return (
    <View style={styles.container}>
      {/* user header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.headerUser}>
          <View
            style={[
              styles.userIcon,
              {
                backgroundColor: `${colors.primary}20`,
              },
            ]}
          >
            <Ionicons name="person-outline" size={20} color={colors.primary} />
          </View>

          <View style={styles.headerInfo}>
            <Text
              numberOfLines={1}
              style={[
                styles.userName,
                {
                  color: colors.text,
                },
              ]}
            >
              {trade.user.name}
            </Text>

            <Text
              style={[
                styles.importedLabel,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {t("trade.importedTrade")}
            </Text>
          </View>
        </View>
      </View>

      {/* They can give me */}
      <ExpandableCard
        title={t("trade.theyCanGiveMe")}
        icon="gift-outline"
        badge={<Badge text={trade.canReceive.length} color={colors.success} />}
        initiallyExpanded
        contentPadding={false}
      >
        <SearchBar
          value={receiveSearch}
          onChangeText={setReceiveSearch}
          placeholder={t("trade.searchStickers")}
        />

        <ScrollView
          nestedScrollEnabled
          style={styles.list}
          contentContainerStyle={styles.listContent}
        >
          {canReceive.map((sticker) => (
            <TradeStickerRow
              key={sticker.code}
              sticker={sticker}
              quantity={sticker.quantity}
              badgeType="receive"
            />
          ))}

          {canReceive.length === 0 && (
            <Text
              style={[
                styles.empty,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {receiveSearch
                ? t("trade.noMatchingStickers")
                : t("trade.noStickers")}
            </Text>
          )}
        </ScrollView>
      </ExpandableCard>

      {/* I can give them */}
      <ExpandableCard
        title={t("trade.iCanGiveThem")}
        icon="swap-horizontal-outline"
        badge={<Badge text={trade.canGive.length} color={colors.primary} />}
        initiallyExpanded
        contentPadding={false}
      >
        <SearchBar
          value={giveSearch}
          onChangeText={setGiveSearch}
          placeholder={t("trade.searchStickers")}
        />

        <ScrollView
          nestedScrollEnabled
          style={styles.list}
          contentContainerStyle={styles.listContent}
        >
          {canGive.map((sticker) => (
            <TradeStickerRow
              key={sticker.code}
              sticker={sticker}
              quantity={sticker.mySticker.duplicates}
              badgeType="give"
            />
          ))}

          {canGive.length === 0 && (
            <Text
              style={[
                styles.empty,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              {giveSearch
                ? t("trade.noMatchingStickers")
                : t("trade.noStickers")}
            </Text>
          )}
        </ScrollView>
      </ExpandableCard>
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 12,
  },

  header: {
    marginHorizontal: 16,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
  },

  headerUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  headerInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 16,
    fontWeight: "700",
  },

  importedLabel: {
    marginTop: 2,
    fontSize: 13,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
  },

  scrollContainer: {
    maxHeight: 300,
    marginHorizontal: 16,
    marginBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },

  stickerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    minHeight: 64,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  itemRight: {
    marginLeft: 10,
  },

  empty: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  emptyText: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
*/

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  header: {
    marginHorizontal: 16,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
  },

  headerUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  headerInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 16,
    fontWeight: "700",
  },

  importedLabel: {
    marginTop: 2,
    fontSize: 13,
  },

  list: {
    maxHeight: 320,
  },

  listContent: {
    paddingHorizontal: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  empty: {
    textAlign: "center",
    paddingVertical: 24,
  },
});
