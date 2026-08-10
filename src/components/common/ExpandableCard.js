import React, { useEffect, useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ScrollView,
    LayoutAnimation,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

import Typography from "../../theme/typography";
import Spacing from "../../theme/spacing";

export default function ExpandableCard({
    title,
    titleLines = 1,
    subtitle,
    subtitleLines = 1,

    icon,
    iconSize = 22,
    iconColor,

    children,
    contentPadding = true,

    initiallyExpanded = false,
    disabled = false,

    scrollable = false,
    maxHeight = 350,

    rightContent,
    footer,

    emptyText = "No data",

    showDivider = true,

    onExpand,
    onCollapse,
}) {

    const { colors } = useTheme();

    const [expanded, setExpanded] = useState(
        initiallyExpanded
    );

    const hasChildren = React.Children.count(children) > 0;
  
    function toggle() {

        if (disabled)
            return;

        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut
        );

        setExpanded(current => {

            const next = !current;

            if (next)
                onExpand?.();
            else
                onCollapse?.();

            return next;
        });
    }
  
    return (

        <View
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}
        >

            <Pressable
                onPress={toggle}
                disabled={disabled}
                style={({ pressed }) => [
                    styles.header,
                    pressed &&
                        !disabled &&
                        styles.pressed,
                ]}
            >

                <View style={styles.headerContent}>

                    <View style={styles.left}>

                      {icon && (
                          <Ionicons
                              name={icon}
                              size={iconSize}
                              color={iconColor ?? colors.primary}
                              style={styles.icon}
                          />
                      )}

                        <View style={styles.titleContainer}>
                    
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        color: colors.text,
                                    },
                                ]}
                                numberOfLines={titleLines}
                            >
                                {title}
                            </Text>
                    
                            {!!subtitle && (
                                <Text
                                    style={[
                                        styles.subtitle,
                                        {
                                            color: colors.textSecondary,
                                        },
                                    ]}
                                    numberOfLines={subtitleLines}
                                >
                                    {subtitle}
                                </Text>
                            )}
                    
                        </View>
                    
                    </View>

                    <View style={styles.right}>

                        {rightContent}
                    
                        {!disabled && (
                            <Ionicons
                                name={
                                    expanded
                                        ? "chevron-up"
                                        : "chevron-down"
                                }
                                size={20}
                                color={colors.icon}
                            />
                        )}
                    
                    </View>

                </View>

            </Pressable>
          
            {expanded && (
                <View
                    style={[
                        styles.content,
                        showDivider && {
                            borderTopWidth: 1,
                            borderTopColor: colors.border,
                        },
                        contentPadding && {
                            padding: Spacing.md,
                        },
                    ]}
                >
                    {scrollable ? (
                        <ScrollView
                            style={{
                                maxHeight,
                            }}
                            contentContainerStyle={{
                                paddingBottom: 12,
                            }}
                            nestedScrollEnabled
                            showsVerticalScrollIndicator={false}
                        >

                            {hasChildren ? (
                                children
                            ) : (
                                !!emptyText && (
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
                                )
                            )}
                          
                        </ScrollView>
                    ) : (
                        // children
                        hasChildren ? (
                            children
                        ) : (
                            !!emptyText && (
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
                            )
                        )
                    )}
                </View>
            )}

{footer && (
    <View
        style={[
            styles.footer,
            showDivider && {
                borderTopWidth: 1,
                borderTopColor: colors.border,
            }
        ]}
    >
        {footer}
    </View>
)}
          
        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        marginHorizontal: Spacing.md,
        marginVertical: 6,

        borderWidth: 1,
        borderRadius: 14,

        overflow: "hidden",

        elevation: 2,
    },

    header: {
        padding: Spacing.md,
    },

    headerContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    titleContainer: {
        flex: 1,
        marginRight: Spacing.md,
    },

    title: {
        fontSize: Typography.body,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 3,
        fontSize: Typography.caption,
    },

    content: {
        borderTopWidth: 1,
        // padding: Spacing.md,
    },

    pressed: {
        opacity: 0.85,
    },

    left: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    right: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    
    icon: {
        marginRight: 12,
    },

    footer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
    },

    emptyText: {
        textAlign: "center",
        fontStyle: "italic",
        paddingVertical: 12,
    },
  
});