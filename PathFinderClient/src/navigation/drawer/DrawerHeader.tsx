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

const { width } = Dimensions.get("window");
const height = 34;
const getPath = (): string => {
  const draw = shape.line().curve(shape.curveBasis)([
    [0, height],
    [0, 0],
    [width / 4, 0],
    [width / 2, 0],
    [(width * 3) / 4, 0],
    [width - 10, 0],
    [width, height],
  ]);

  return `${draw}`;
};
const d = getPath();
interface DrawerHeaderProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
const DrawerHeader = ({ navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <View style={styles.headerNavigation}>
            <SimpleLineIcons name="menu" size={20} color="#a3a19b" />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.headerContent}></View>
        {/* TODO INSERT SCREEN HEADER TITLE TEXT HERE */}
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",

    backgroundColor: "#F3F2F1",
  },
  headerNavigation: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#2a4337",
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
