import React from "react";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import TabIcon from "./TabIcon";
import { BottomTabBarProps } from "react-navigation-tabs/lib/typescript/src/types";

import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const height = 34;
const getPath = (): string => {
  const draw = shape.line().curve(shape.curveBasis)([
    [0, 0],
    [0, height],
    [width / 4, height],
    [width / 2, height],
    [(width * 3) / 4, height],
    [width - 10, height],
    [width, 0]
  ]);

  return `${draw}`;
};
const d = getPath();
export default ({
  style,
  navigation,
  activeTintColor,
  inactiveTintColor,
  renderIcon,
  jumpTo
}: BottomTabBarProps) => {
  const { index, routes } = navigation.state;
  return (
    <SafeAreaView
      {...{ height, width }}
      pointerEvents="box-none"
      style={styles.container}
    >
      <Svg width={width * 2} height={height}>
        <Path fill="#ffff" stroke-width="3" stroke="#ffff" d={d} />
      </Svg>
      <View pointerEvents="box-none" style={styles.content}>
        {routes.map((route, idx) => {
          const focused = index === idx;

          if (!route.params || !route.params.navigationDisabled) {
            return (
              <TabIcon
                key={route.key}
                route={route}
                renderIcon={renderIcon}
                focused={focused}
                activeTintColor={activeTintColor}
                inactiveTintColor={inactiveTintColor}
                onPress={() =>
                  (!route.params || !route.params.navigationDisabled) &&
                  jumpTo(route.key)
                }
              />
            );
          }
          const Icon = renderIcon({
            route,
            focused,
            tintColor:
              focused && typeof activeTintColor === "string"
                ? activeTintColor
                : typeof inactiveTintColor === "string"
                ? inactiveTintColor
                : undefined
          });
          return {
            ...(Icon as Object),
            key: "simple"
          };
        })}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: "#2A4337"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
