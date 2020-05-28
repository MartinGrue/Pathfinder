import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "./Drawer";
import { SimpleLineIcons } from "@expo/vector-icons";

import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";
import TopViewCurve from "../../constants/TopViewCurve";
import { theme } from "../../constants/theme";

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
    <>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <SimpleLineIcons name="menu" size={18} color="#a3a19b" />
          </TouchableWithoutFeedback>
        </View>
        {children}
      </View>
      <View style={{ backgroundColor: theme.colors.white }}>
        <TopViewCurve
          {...{ width, height }}
          color={theme.colors.white2}
        ></TopViewCurve>
      </View>
    </>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 12 * 2,
    paddingTop: 8 * 2.5,
    paddingBottom: 12 * 1.5,
    backgroundColor: "#F3F2F1",
  },
  headerTitle: {
    color: "#2a4337",
  },
});
