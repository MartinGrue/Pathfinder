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
}
const DrawerHeader = ({ navigation }: DrawerHeaderProps) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerNavigation}>
          <TouchableWithoutFeedback
            style={{ width: 30, height: 30 }}
            onPress={() => navigation.openDrawer()}
          >
            <SimpleLineIcons name="menu" size={18} color="#a3a19b" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerContent}></View>
        {/* TODO INSERT SCREEN HEADER TITLE TEXT HERE */}
      </View>
    </>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 12 * 2,
    paddingTop: 8 * 2.5,
    paddingBottom: 12 * 1.5,
    backgroundColor: "#F3F2F1",
  },
  headerNavigation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
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
