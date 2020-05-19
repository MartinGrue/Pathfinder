import React from "react";
import { StyleSheet } from "react-native";
import { DrawerParamList } from "./Drawer";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

interface FindYourPathMapProps {
  children: JSX.Element;
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
  animatedStyle: {
    borderRadius: Animated.Node<number>;
    transform: {
      scale: Animated.Node<number>;
    }[];
  };
}
export default ({
  navigation,
  animatedStyle,
  children,
}: FindYourPathMapProps) => {
  return (
    <Animated.View
      style={[
        StyleSheet.flatten([animatedStyle]),
        StyleSheet.absoluteFill,
        { backgroundColor: "#F3F2F1", overflow: "hidden" },
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </Animated.View>
  );
};
const styles = StyleSheet.create({});
