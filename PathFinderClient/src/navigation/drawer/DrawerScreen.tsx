import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

export default ({ children }: { children: React.ReactNode }) => {
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
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={{ flex: 1 }}>{children}</View>
        {/* {children} */}
      </SafeAreaView>
    </Animated.View>
  );
};
