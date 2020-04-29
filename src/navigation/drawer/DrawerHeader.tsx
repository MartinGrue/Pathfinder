import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "./Drawer";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const height = 34;
const getPath = (): string => {
  const draw = shape.line().curve(shape.curveBasis)([
    [0, height], //M
    [0, 0], //A sup von M
    [width / 4, 0], //B sup von C
    [width / 2, 0], //C
    [(width * 3) / 4, 0], //D sup von C
    [width - 10, 0], //E sup von F
    [width, height] //F
  ]);

  return `${draw}`;
};
const d = getPath();
interface DrawerHeaderProps {
  navigation: DrawerNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
}
const DrawerHeader = ({ navigation }: DrawerHeaderProps) => {
  return (
    <>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <SimpleLineIcons
              name="menu"
              size={18}
              color="#a3a19b"
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.headerLocation}>San Francisco, US</Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Feather
              name="info"
              size={28}
              color="#a3a19b"
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={{ backgroundColor: "#F3F2F1" }}>
        <Svg width={width * 2} height={height}>
          <Path fill="#FDFDFB" stroke-width="3" stroke="#FDFDFB" d={d} />
        </Svg>
      </View>
    </>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 12 * 2,
    paddingTop: 8 * 2.5,
    paddingBottom: 12 * 1.5
  },
  headerTitle: {
    color: "#2a4337"
  },
  headerLocation: {
    paddingVertical: 8 / 3
  }
});
