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
  return (

    <Svg width={width} height={height}>
      <Path
        fill={color}
        d={`m 0 ${height} L 0 0 Q 0 ${height} ${(width * 1) / 10} ${height} L ${
          (width * 9) / 10
        } ${height} Q ${width} ${height} ${width} 0 L ${width} ${height} L 0 ${height}`}
      ></Path>
    </Svg>
  );
};

