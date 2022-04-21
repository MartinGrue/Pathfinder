import React from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as shape from "d3-shape";
import BottomViewCurve from "../../constants/BottomViewCurve";
const { width } = Dimensions.get("window");
const height = 20;

const getPath = (): string => {
  const draw = shape.line().curve(shape.curveBasis)([
    [0, 0],
    [0, height],

    [0, height],
    [0, height],

    [width, height],
    [width, height],

    [width, 0],
    [width, 0],

    [width, height],
    [(width * 3) / 4, height],

    [(width * 1) / 4, height],
    [(width * 1) / 4, height],

    [0, height],
    [0, 0],
  ]);

  return `${draw}`;
};
const d = getPath();
export default ({
  style,
  navigation,
  activeTintColor,
  inactiveTintColor,
  state,
  descriptors,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {/* <Svg width={width * 2} height={30}>
        <Path fill={"#2A4337"} d={d} />
      </Svg> */}
      <BottomViewCurve
        {...{ width, height }}
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
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
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
