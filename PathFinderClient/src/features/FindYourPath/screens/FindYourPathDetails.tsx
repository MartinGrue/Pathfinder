import React, { useCallback, useContext } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import { theme } from "../../../constants/theme";
import {
  CompositeNavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../navigation/FindYourPathButtomTabNavigator";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";

import TopInfo from "./TopInfo";
import SvgSection from "./SvgSection";
import MiddleInfo from "./MiddleInfo";
import NavSection from "./NavSection";
import { Context } from "../../../contexts/AuthContext";
type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList, "FindYourPathButtomTabNavigator">
>;

// type TabNavigatorRouteProp = RouteProp<TabParamList, "DetailsStack2">;

// interface Props2 {
//   navigation: BottomTabNavigationProp<TabParamList, keyof TabParamList>;
//   route: TabNavigatorRouteProp;
// }

export default () => {
  const navigation = useNavigation<NavigationProp>();
  const { setHeaderText } = useContext(Context)!;
  useFocusEffect(
    useCallback(() => {
      return () => {
        setHeaderText("");
      };
    }, [])
  );

  const onPressBack: () => void = () => {
    console.log("pressed");
    navigation.navigate("FindYourPath");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.25 }}>
        <TopInfo></TopInfo>
      </View>
      <View style={{ flex: 2 }}>
        <SvgSection></SvgSection>
      </View>
      <View style={{ flex: 0.5 }}>
        <MiddleInfo></MiddleInfo>
      </View>
      <View style={{ flex: 1 }}>
        <NavSection></NavSection>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.sizes.base * 1,
    // backgroundColor: "magenta",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 45,
    backgroundColor: theme.colors.white,
  },
});
