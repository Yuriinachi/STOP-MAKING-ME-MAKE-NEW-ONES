import { useNavigationContainerRef } from "@react-navigation/native";
import colors from "../config/colors";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  <View style={styles.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={styles.appButton}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);



const ASSAHome = ({navigation}) => {

  return (
    <View style={styles.screenContainer}>
      <AppButton icon="search" title="SEARCH" backgroundColor={colors.primary} onPress={() => navigation.navigate("Search")}/>
      <AppButton icon="shield" title="SWMS" backgroundColor={colors.primary}  onPress={() => navigation.navigate("SWMS")}/>
      <AppButton icon="wheelchair-alt" title="IIR CASES" backgroundColor={colors.primary} onPress={() => navigation.navigate("")}/>
    </View>
  );
  


};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 45,
    backgroundColor: colors.bg,
  },
  appButton: {
    padding: 20,
    justifyContent: 'center',

  },
  appButtonText: {
    fontSize: 20,
    color: "white",
    
  },
  appButtonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default ASSAHome;