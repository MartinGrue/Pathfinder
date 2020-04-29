import React from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "./Drawer";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerHeader from "./DrawerHeader";
interface FindYourPathMapProps {
  children: JSX.Element;
  navigation: DrawerNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
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
  children
}: FindYourPathMapProps) => {
  return (
    <Animated.View
      //   style={[StyleSheet.flatten([styles.stack, animatedStyle]), {}]}
      style={[
        StyleSheet.flatten([animatedStyle]),
        StyleSheet.absoluteFill,
        { backgroundColor: "#2A4337", flex: 1, overflow: "hidden" }
      ]}
    >
      <View style={{backgroundColor: "#F3F2F1"}}>
      <SafeAreaView>
        <DrawerHeader {...{ navigation }}></DrawerHeader>
      </SafeAreaView>
      </View>


      {children}
    </Animated.View>
  );
};
const styles = StyleSheet.create({});
