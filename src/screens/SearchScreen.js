import { useMemo, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../hooks/useTheme";

import StickerRepository from "../database/repositories/StickerRepository";

import Flag from "../components/common/Flag";
import Card from "../components/common/Card";

import { formatStickerNumber } from "../utils/formatters";

import Typography from "../theme/typography";
import Spacing from "../theme/spacing";

export default function SearchScreen({
    navigation,
}) {

    const { colors } = useTheme();

    const [query, setQuery] = useState("");

    const stickers = useMemo(() => {

        return StickerRepository.findAll();

    }, []);

    const results = useMemo(() => {

        const search = query
            .trim()
            .toLowerCase();

        if (!search) {
            return [];
        }

        return stickers.filter(sticker => {

            const number = String(
                sticker.number ?? ""
            ).toLowerCase();

            const name = String(
                sticker.name ?? ""
            ).toLowerCase();

            const team = String(
                sticker.team ?? ""
            ).toLowerCase();

            const code = String(
                sticker.code ?? ""
            ).toLowerCase();

            return (
                number.includes(search) ||
                name.includes(search) ||
                team.includes(search) ||
                code.includes(search)
            );

        });

    }, [query, stickers]);

    function handleStickerPress(sticker) {

        navigation.navigate(
            "StickerDetails",
            {
                stickerId: sticker.id,
            }
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

            <View style={styles.header}>

                <Text
                    style={[
                        styles.title,
                        {
                            color: colors.text,
                        },
                    ]}
                >
                    Search
                </Text>

                <Text
                    style={[
                        styles.subtitle,
                        {
                            color: colors.textSecondary,
                        },
                    ]}
                >
                    Find a sticker by number, player or team
                </Text>

            </View>

            <View
                style={[
                    styles.searchContainer,
                    {
                        backgroundColor: colors.surface,
                        borderColor: colors.border,
                    },
                ]}
            >

                <Ionicons
                    name="search-outline"
                    size={24}
                    color={colors.icon}
                />

                <TextInput
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Number, player or team..."
                    placeholderTextColor={colors.textMuted}
                    style={[
                        styles.input,
                        {
                            color: colors.text,
                        },
                    ]}
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="search"
                />

                {!!query && (

                    <Pressable
                        onPress={() => setQuery("")}
                        hitSlop={10}
                    >

                        <Ionicons
                            name="close-circle"
                            size={22}
                            color={colors.icon}
                        />

                    </Pressable>

                )}

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {!query.trim() && (

                    <EmptyState
                        icon="search-outline"
                        title="Search stickers"
                        text="Enter a number, player name, team or code."
                    />

                )}

                {query.trim() && results.length === 0 && (

                    <EmptyState
                        icon="search-outline"
                        title="No stickers found"
                        text={`No results for "${query.trim()}".`}
                    />

                )}

                {query.trim() && results.length > 0 && (

                    <>

                        <Text
                            style={[
                                styles.resultCount,
                                {
                                    color: colors.textSecondary,
                                },
                            ]}
                        >
                            {results.length}{" "}
                            {results.length === 1
                                ? "sticker"
                                : "stickers"}
                        </Text>

                        {results.map(sticker => (

                            <StickerResult
                                key={sticker.id}
                                sticker={sticker}
                                colors={colors}
                                onPress={() =>
                                    handleStickerPress(
                                        sticker
                                    )
                                }
                            />

                        ))}

                    </>

                )}

            </ScrollView>

        </SafeAreaView>

    );
}

function StickerResult({
    sticker,
    colors,
    onPress,
}) {

    return (

        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.resultCard,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
                pressed && styles.pressed,
            ]}
        >

            <View style={styles.resultLeft}>

                <Flag
                    iso2={sticker.team_iso2}
                    size={42}
                />

            </View>

            <View style={styles.resultInfo}>

                <Text
                    style={[
                        styles.number,
                        {
                            color: colors.primary,
                        },
                    ]}
                >
                    #{formatStickerNumber(sticker.number)}
                </Text>

                <Text
                    numberOfLines={1}
                    style={[
                        styles.name,
                        {
                            color: colors.text,
                        },
                    ]}
                >
                    {sticker.name}
                </Text>

                <Text
                    numberOfLines={1}
                    style={[
                        styles.team,
                        {
                            color: colors.textSecondary,
                        },
                    ]}
                >
                    {sticker.team}
                </Text>

            </View>

            <View style={styles.resultRight}>

                <View
                    style={[
                        styles.status,
                        {
                            backgroundColor:
                                sticker.owned
                                    ? `${colors.success}20`
                                    : `${colors.warning}20`,
                        },
                    ]}
                >

                    <Ionicons
                        name={
                            sticker.owned
                                ? "checkmark-circle"
                                : "ellipse-outline"
                        }
                        size={16}
                        color={
                            sticker.owned
                                ? colors.success
                                : colors.warning
                        }
                    />

                    <Text
                        style={[
                            styles.statusText,
                            {
                                color:
                                    sticker.owned
                                        ? colors.success
                                        : colors.warning,
                            },
                        ]}
                    >
                        {sticker.owned
                            ? "Collected"
                            : "Missing"}
                    </Text>

                </View>

                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.icon}
                />

            </View>

        </Pressable>

    );
}

function EmptyState({
    icon,
    title,
    text,
}) {

    const { colors } = useTheme();

    return (

        <View style={styles.emptyState}>

            <Ionicons
                name={icon}
                size={52}
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
                {title}
            </Text>

            <Text
                style={[
                    styles.emptyText,
                    {
                        color: colors.textSecondary,
                    },
                ]}
            >
                {text}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.md,
        paddingBottom: Spacing.md,
    },

    title: {
        fontSize: Typography.h1,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 4,
        fontSize: Typography.body,
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginHorizontal: Spacing.lg,

        minHeight: 56,

        paddingHorizontal: 16,

        borderWidth: 1,
        borderRadius: 14,
    },

    input: {
        flex: 1,

        marginLeft: 10,

        fontSize: Typography.body,
    },

    content: {
        padding: Spacing.lg,
        paddingBottom: 40,
    },

    resultCount: {
        fontSize: Typography.caption,
        fontWeight: "600",
        marginBottom: 10,
    },

    resultCard: {
        flexDirection: "row",
        alignItems: "center",

        minHeight: 82,

        padding: 14,
        marginBottom: 10,

        borderWidth: 1,
        borderRadius: 14,

        elevation: 2,
    },

    resultLeft: {
        width: 52,
        alignItems: "center",
    },

    resultInfo: {
        flex: 1,
        marginLeft: 8,
    },

    number: {
        fontSize: Typography.caption,
        fontWeight: "700",
    },

    name: {
        marginTop: 2,
        fontSize: Typography.body,
        fontWeight: "700",
    },

    team: {
        marginTop: 2,
        fontSize: Typography.caption,
    },

    resultRight: {
        alignItems: "flex-end",
        gap: 8,
    },

    status: {
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 8,
        paddingVertical: 5,

        borderRadius: 999,

        gap: 4,
    },

    statusText: {
        fontSize: 11,
        fontWeight: "700",
    },

    pressed: {
        opacity: 0.75,
    },

    emptyState: {
        alignItems: "center",
        justifyContent: "center",

        paddingVertical: 80,
        paddingHorizontal: 30,
    },

    emptyTitle: {
        marginTop: 16,
        fontSize: Typography.h2,
        fontWeight: "700",
        textAlign: "center",
    },

    emptyText: {
        marginTop: 8,
        fontSize: Typography.body,
        textAlign: "center",
        lineHeight: 22,
    },

});