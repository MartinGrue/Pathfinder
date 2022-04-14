import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";
import Svg, { Path, Rect, Circle, Image, ClipPath, G } from "react-native-svg";
import { areaRadial, curveBasis } from "d3-shape";
import SvgCircleData from "./SvgCircleData";

const imageSource = require("../../../../assets/backgroundImages/2d97b675051427.5c41b8c7ccdb8.jpg");

const getPath = (
  data: [number, number][],
  options?: { from: number; to: number }
): string => {
  const partialData = options
    ? data.slice(options.from, options.to)
    : undefined;
  // this only works in svg viewBox 0 0 100 100
  const innercircle = 45;
  const bandWidth = 50 - innercircle;
  //d[1] == y-coordinate of the selected point of d[x, y]
  const maxY = Math.max(...data.map((d) => d[1]));
  const dataScaling = bandWidth / maxY;

  const transform = areaRadial()
    .outerRadius((d, i) => {
      //d[1] == y-coordinate of the selected point of d[x, y]
      return d[1] * dataScaling + innercircle;
    })
    .angle((d, i) => {
      return (i / (data.length - 1)) * Math.PI * 2;
    })
    .innerRadius(() => {
      return innercircle;
    })
    .curve(curveBasis);
  return `${transform(partialData ? partialData : data)}`;
};

const fullPath = getPath(SvgCircleData);
const partialPath = getPath(SvgCircleData, {
  from: 0,
  to: SvgCircleData.length - 2,
});

export default () => {
  return (
    <View style={styles.svgContainer}>
      <View style={{ aspectRatio: 1 }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMinYMid meet"
        >
          <Path
            y={50}
            x={50}
            stroke-width="1"
            stroke={theme.colors.white2}
            fill={theme.colors.white2}
            d={fullPath}
          />
          <Path
            y={50}
            x={50}
            stroke-width="1"
            stroke={theme.colors.primary}
            fill={theme.colors.primary}
            d={partialPath}
          />
          <ClipPath {...{ id: "clip" }}>
            <Circle r={37.5} cx={50} cy={50}></Circle>
          </ClipPath>
          {/*opacity: 1 is only needed to prevent ts error, because empty props are not excepted */}
          <G {...{ opacity: 1 }}>
            <Image
              href={imageSource}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMax slice"
              clipPath="url(#clip)"
            />
            <Rect
              opacity={0.5}
              fill="grey"
              width="100%"
              height="100%"
              clipPath="url(#clip)"
            />
          </G>
        </Svg>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  svgContainer: {
    backgroundColor: "grey",
    overflow: "hidden",
  },
});
