import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";

interface BottomViewCurveProps {
  width: number;
  height: number;
  color: string;
}
export default ({ width, height, color }: BottomViewCurveProps) => {
  const getPath = (): string => {
    const draw = shape.line().curve(shape.curveBasisClosed)([
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
      [0,0],

    ]);

    return `${draw}`;
  };
  const d = getPath();
  return (
    <Svg width={width * 2} height={height - 4}>
      <Path fill={color} d={d} />
    </Svg>
  );
};

const styles = StyleSheet.create({});
