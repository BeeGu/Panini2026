import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

import SearchBar from "../common/SearchBar";

import useTheme from "../../hooks/useTheme";

export default function AlbumSearch({ value, onChangeText }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >
      <SearchBar
        value={value}
        onChangeText={onChangeText}
        placeholder={t("album.searchPlaceholder")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 84,
    justifyContent: "center",
  },
});
