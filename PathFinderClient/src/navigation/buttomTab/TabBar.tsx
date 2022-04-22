import React from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomViewCurve from "../../constants/BottomViewCurve";
const { width } = Dimensions.get("window");
const height = 20;

export default ({ navigation, state, descriptors }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <BottomViewCurve
        width={width * 1.001}
        height={30}
        color={"#2A4337"}
      ></BottomViewCurve>
      <View pointerEvents="box-none" style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
            >
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: "white",
                  size: 24,
                })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: width,
    height: 65,
    // backgroundColor: "#00000000",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  content: {
    backgroundColor: "#2A4337",
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
