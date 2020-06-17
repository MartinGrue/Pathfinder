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
  children?: React.ReactNode;
}

const DrawerHeader = ({ navigation, children }: DrawerHeaderProps) => {

  return (
    <View style={styles.header} >
      <View style={styles.content}>
        <TouchableWithoutFeedback
          style={{ width: 30, height: 30 }}
          onPress={() => navigation.openDrawer()}
        >
          <SimpleLineIcons name="menu" size={18} color="#a3a19b" />
        </TouchableWithoutFeedback>
      </View>
      {/* TODO INSERT SCREEN HEADER TITLE TEXT HERE */}
      <View
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          zIndex: 100,
          top: 40,
          left: 0,
          right: 0,
        }}
      >
        <TopViewCurve
          height={50}
          width={width}
          color={theme.colors.white2}
        ></TopViewCurve>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  header: {
    height:40,
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    color: "#2a4337",
  },
});
