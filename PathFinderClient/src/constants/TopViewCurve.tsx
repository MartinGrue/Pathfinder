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
      [0, height],
      [0, 0],

      [0, 0],
      [0, 0],

      [width, 0],
      [width, 0],

      [width, 0],
      [width, height],

      [width, 0],
      [(width * 3) / 4, 0],

      [(width * 1) / 4, 0],
      [(width * 1) / 4, 0],

      [0, 0],
    ]);

    return `${draw}`;
  };
  const d = getPath();
  return (
    // <Svg width={width * 2} height={height}>
    //   <Path fill={color} d={d} />
    // </Svg>
    <Svg width={width} height={height} >
      <Path
        fill={color}
        d={`m 0 0 L 0 ${height} Q 0 0  ${(width * 1) / 10} 0 L ${
          (width * 9) / 10
        } 0 Q ${width} 0 ${width} ${height} L ${width} 0 L 0 0`}
      ></Path>
    </Svg>
  );
};

const styles = StyleSheet.create({});
{
  /* <BottomViewCurve
{...{ width, height }}
color={"#2A4337"}
></BottomViewCurve> */
}
