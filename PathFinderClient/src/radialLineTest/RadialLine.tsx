import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as d3 from "d3-shape";
import Svg, { Path, Rect, Circle } from "react-native-svg";

import { scaleTime, scaleLinear } from "d3-scale";
const { width, height: wHeight } = Dimensions.get("window");

const getPath = (): string => {
  //   const draw = shape.radialLine()([
  //     [0, 100],
  //     [Math.PI * 0.25, 100],
  //     [Math.PI * 0.5, 100],
  //     [Math.PI * 0.75, 100],
  //     [Math.PI * 1, 100],
  //     [Math.PI * 1.25, 100],
  //     [Math.PI * 1.5, 100],
  //     [Math.PI * 1.75, 100],
  //     [Math.PI * 2, 100],
  //   ]);
  //   return `${draw}`;
  interface DataPoint {
    date: number;
    value: number;
  }

  interface GraphProps {
    data: DataPoint[];
  }
  const data = [
    { date: 10, value: 10 },
    { date: 20, value: 20 },
    { date: 30, value: 10 },
    { date: 40, value: 30 },
    { date: 50, value: 40 },
    { date: 60, value: 50 },
  ];
  const φ = (1 + Math.sqrt(5)) / 2;
  const height = (1 - 1 / φ) * wHeight;
  const strokeWidth = 4;
  const padding = strokeWidth / 2;
  const CURSOR_RADIUS = 8;
  const STROKE_WIDTH = CURSOR_RADIUS / 2;
  const getDomain = (domain: number[]) => [
    Math.min(...domain),
    Math.max(...domain),
  ];
  const scaleX = scaleTime()
    .domain(getDomain(data.map((d) => d.date)))
    .range([0, width]);
  const scaleY = scaleLinear()
    .domain(getDomain(data.map((d) => d.value)))
    .range([height - padding, padding]);

  const d = d3
    .line<DataPoint>()
    .x((p) => scaleX(p.date))
    .y((p) => scaleY(p.value))
    .curve(d3.curveBasis)(data) as string;
  const d2 = d3
    .line<DataPoint>()
    .x((p) => p.date)
    .y((p) => p.value)
    .curve(d3.curveBasis)(data) as string;
  const d4 = d3
    .lineRadial<DataPoint>()
    .radius(function (d, i) {
      return 60;
    })
    .angle(function (d) {
      return d.date * (Math.PI / 180);
    })
    .curve(d3.curveBasis)(data) as string;
  var radialLineGenerator = d3.lineRadial();

  var points = [
    [0, 100],
    [Math.PI * 0.25, 100],
    [Math.PI * 0.5, 100],
    [Math.PI * 0.75, 100],
    [Math.PI * 1, 100],
    [Math.PI * 1.25, 100],
    [Math.PI * 1.5, 100],
    [Math.PI * 1.75, 100],
    [Math.PI * 2, 100],
  ] as [number, number][];
  var points2 = [
    [0, 100],
    [1, 120],
    [2, 110],
    [3, 130],
    [4, 140],
    [5, 100],
    [6, 100],
    [7, 100],
    [8, 100],
    [9, 100],
    [10, 120],
    [11, 110],
    [12, 130],
    [13, 140],
    [14, 100],
    [15, 100],
    [16, 100],
    [17, 100],
    [18, 100],
    [19, 120],
    [2, 110],
    [3, 130],
    [4, 140],
    [5, 100],
    [6, 100],
    [7, 100],
    [8, 100],
    [9, 100],
    [10, 120],
    [11, 110],
    [12, 130],
    [13, 140],
    [14, 100],
    [15, 100],
    [16, 100],
    [17, 100],
  ] as [number, number][];
  var radialLine = radialLineGenerator(points);

  var d5 = d3
    .areaRadial()
    .outerRadius((d, i) => {
      return d[1];
    })
    .angle((d, i) => {
      return (i / (points2.length - 1)) * Math.PI * 2;
    })
    .innerRadius((d, i) => {
      return 90;
    })
    .curve(d3.curveCardinalClosed);
  //   return `${d}`;
  return `${d5(points2)}`;
};
const d = getPath();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Svg>
        <Path stroke-width="3" stroke="black" d={d} />
      </Svg>
      <Svg width="320" height="320">
        <Path y={150} x={150} stroke-width="3" stroke="black" d={d} />
        <Circle
          y={150}
          x={150}
          r="70"
          stroke="red"
          stroke-width="3"
          fill="red"
        />
      </Svg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: wHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
