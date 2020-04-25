import React from "react";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/drawer/Drawer";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
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
        { backgroundColor: "#FDFDFB" }
      ]}
    >
      <SafeAreaView
      >
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Feather
            name="menu"
            size={18}
            color="black"
            style={{ paddingHorizontal: 10 }}
          />
        </TouchableWithoutFeedback>

      </SafeAreaView>
      {children}
    </Animated.View>
  );
};
