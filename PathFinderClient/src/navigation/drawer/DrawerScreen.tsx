import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  getDrawerStatusFromState,
  useDrawerProgress,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default ({ children }: { children: React.ReactNode }) => {
  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;
  const drawerStatus = useDrawerStatus();

  const animatedScreenStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 36]);
    return {
      borderRadius,
      transform: [{ scale }],
    };
  });
  // console.log("drawerStatus: ", progress);
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
        <View pointerEvents={drawerStatus === "open" ? "none" : "auto"} style={{ flex: 1 }}>{children}</View>
      </Animated.View>
  );
};
