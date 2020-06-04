import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as d3 from "d3-shape";
import Svg, { Path, Rect, Circle, Image, ClipPath } from "react-native-svg";

import { scaleTime, scaleLinear } from "d3-scale";
import { theme } from "../constants/theme";
const { width, height: wHeight } = Dimensions.get("window");

var points = [
  [0, 110],
  [1, 120],
  [2, 110],
  [3, 130],
  [4, 140],
  [5, 110],
  [6, 110],
  [7, 110],
  [8, 110],
  [9, 110],
  [10, 120],
  [11, 110],
  [12, 130],
  [13, 140],
  [14, 120],
  [15, 110],
  [16, 110],
  [17, 110],
  [18, 110],
  [19, 120],
  [2, 110],
  [3, 130],
  [4, 140],
  [5, 110],
  [6, 110],
  [7, 100],
  [8, 110],
  [9, 110],
  [10, 120],
  [11, 110],
  [12, 130],
  [13, 140],
  [14, 110],
  [15, 100],
  [16, 100],
  [17, 110],

  [1, 110],
  [1, 100],
  [1, 100],
  [1, 100],
  [1, 110],
  [1, 110],
  [1, 110],
  [1, 110],
] as [number, number][];

const getPath = (): string => {
  var d5 = d3
    .areaRadial()
    .outerRadius((d, i) => {
      return d[1];
    })
    .angle((d, i) => {
      return (i / (points.length - 1)) * Math.PI * 2;
    })
    .innerRadius((d, i) => {
      return 100;
    })
    .curve(d3.curveLinearClosed);
  //   return `${d}`;
  return `${d5(points)}`;
};
const d = getPath();

const getPartinalPath = (): string => {
  const partialData = points.slice(0, Math.floor(points.length * 0.3));
  var d5 = d3
    .areaRadial()
    .outerRadius((d, i) => {
      return d[1];
    })
    .angle((d, i) => {
      return (i / (points.length - 1)) * Math.PI * 2;
    })
    .innerRadius((d, i) => {
      return 100;
    })
    .curve(d3.curveLinear);
  //   return `${d}`;
  return `${d5(partialData)}`;
};
const dPartial = getPartinalPath();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 50, backgroundColor: "green", width }}>
        <Text>gegege</Text>
      </View>
      <View>
        <Svg width={width} height="320">
          <Path
            y={150}
            x={width / 2}
            stroke-width="1"
            stroke={theme.colors.gray2}
            fill={theme.colors.gray2}
            d={d}
          />
          <Path
            y={150}
            x={width / 2}
            stroke-width="1"
            stroke={theme.colors.primary}
            fill={theme.colors.primary}
            d={dPartial}
          />
          <ClipPath id="clip">
            <Circle r={80} cx={width / 2} cy={150}></Circle>
          </ClipPath>
          <Image
            href={require("../../assets/backgroundImages/2d97b675051427.5c41b8c7ccdb8.jpg")}
            width={width}
            height={320}
            x={(width * 1) / 4}
            y={-(320 * 1) / 10}
            preserveAspectRatio="xMinYMid meet"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>
      <View style={{ height: 50, backgroundColor: "red", width}}><Text>gegege</Text></View>
      <View style={{ height: 50, backgroundColor: "yellow", width}}><Text>gegege</Text></View>

      <View style={{ backgroundColor: "green" }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
