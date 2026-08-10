import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";
// import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";
import Typography from "../../theme/typography";

import MathUtils from "../../utils/MathUtils";

export default function AlbumHeader({
    owned,
    total,
}) {
    const { colors } = useTheme();

    const percentage = MathUtils.percentage(owned, total, 0);

    return (
        <View
          style={[
              styles.container,
              {
                  backgroundColor: colors.surface,
                  borderBottomColor: colors.border,
              },
          ]}
        >
            <Text
              style={[
                  styles.title,
                  {
                      color: colors.primary,
                  },
              ]}
            >
                Album
            </Text>

            <Text
              style={[
                  styles.subtitle,
                  {
                      color: colors.textSecondary,
                  },
              ]}
            >
                {owned} / {total} stickere ({percentage}%)
            </Text>

            <ProgressBar
                value={owned}
                max={total}
                height={12}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
    },

    title: {
        fontSize: Typography.h1,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 4,
        fontSize: Typography.body,
    },

});