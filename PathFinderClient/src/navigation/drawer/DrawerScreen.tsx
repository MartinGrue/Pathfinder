import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerParamList } from "./Drawer";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import Animated from "react-native-reanimated";

interface DrawerScreenProps {
  children: JSX.Element;
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
  animatedStyle: {
    borderRadius: Animated.Node<number>;
    transform: {
      scale: Animated.Node<number>;
    }[];
  };
}
export default ({ navigation, animatedStyle, children }: DrawerScreenProps) => {
  return (
    <Animated.View
      style={[
        StyleSheet.flatten([animatedStyle]),
        StyleSheet.absoluteFill,
        {
          overflow: "hidden",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "#2A4337" }}>{children}</View>
    </Animated.View>
  );
};
