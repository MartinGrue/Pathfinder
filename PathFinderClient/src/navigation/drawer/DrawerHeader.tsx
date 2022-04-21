import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  LayoutChangeEvent,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "./Drawer";
import { SimpleLineIcons } from "@expo/vector-icons";

import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";
import TopViewCurve from "../../constants/TopViewCurve";
import { theme } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions, useRoute } from "@react-navigation/native";
import { TabNavigatorRouteProp } from "../../features/FindYourPath/navigation/FindYourPathButtomTabNavigator";

const { width } = Dimensions.get("window");
const DRAWER_HEIGHT = 50;
interface DrawerHeaderProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
const DrawerHeader = () => {
  const navigation = useNavigation();
  const route = useRoute<TabNavigatorRouteProp>();
  console.log("path in header: ",route.path);

  return (
    <View style={styles.headerContainer}>
      <View style={[styles.headerNavigationContainer]}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
        >
          <View style={styles.headerNavigation}>
            <SimpleLineIcons name="menu" size={20} color="#a3a19b" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.curve]}>
        <TopViewCurve
          width={width}
          height={30}
          color={theme.colors.white2}
        ></TopViewCurve>
      </View>
      <View style={styles.headerContent}></View>
      {/* TODO INSERT SCREEN HEADER TITLE TEXT HERE */}
    </View>
    // </SafeAreaView>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: DRAWER_HEIGHT,
    backgroundColor: theme.colors.white2,
  },
  headerNavigationContainer: {
    height: "100%",
    flexDirection: "row",
    marginHorizontal: theme.sizes.base * 2,
    backgroundColor: "blue",
  },
  headerNavigation: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#2a4337",
  },
  curve: {
    position: "absolute",
    top: 50,
    zIndex: 100,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
