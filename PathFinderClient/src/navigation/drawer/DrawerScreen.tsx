import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerParamList } from "./Drawer";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

interface DrawerScreenProps {
  children: JSX.Element;
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation, children }: DrawerScreenProps) => {
  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;

  const animatedScreenStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

    const borderRadius = interpolate(progress.value, [0, 1], [0, 36]);

    return { borderRadius, transform: [{ scale }] };
  });

  return (
    <Animated.View
      style={[
        StyleSheet.flatten([animatedScreenStyle]),
        StyleSheet.absoluteFill,
        {
          overflow: "hidden",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>{children}</View>
    </Animated.View>
  );
};
