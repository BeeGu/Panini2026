import { View, StyleSheet } from "react-native";

import SearchBar from "../common/SearchBar";

import useTheme from "../../hooks/useTheme";

export default function AlbumSearch({ value, onChangeText }) {
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
        placeholder="Număr, jucător sau echipă..."
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
