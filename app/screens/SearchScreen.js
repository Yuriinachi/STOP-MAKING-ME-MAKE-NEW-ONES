import React from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../config/colors";

const SearchScreen = ({ navigaton }) => {
  return(
    <SafeAreaView style={styles.screenContainer}>
     
      <SearchBar
  placeholder="Search here"
  onPress={() => alert("onPress")}
  onChangeText={(text) => console.log(text)}
/>

    {/* Need to add filter */}
    </SafeAreaView>

  )
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
})
export default SearchScreen;