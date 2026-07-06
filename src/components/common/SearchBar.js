import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../theme/colors";
import Spacing from "../../theme/spacing";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Caută..."
}) {

  return (
    <View style={styles.container}>

      <Ionicons
        name="search"
        size={22}
        color={Colors.textSecondary}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
      />

      {value.length > 0 && (
        <Ionicons
          name="close-circle"
          size={22}
          color={Colors.textSecondary}
          onPress={() => onChangeText("")}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:Colors.white,
    marginHorizontal:Spacing.lg,
    marginVertical:Spacing.md,
    paddingHorizontal:Spacing.md,
    borderRadius:12,
    borderWidth:1,
    borderColor:Colors.border,
  },

  input:{
    flex:1,
    padding:12,
    fontSize:16,
  },

});