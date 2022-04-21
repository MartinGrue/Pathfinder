import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";
import Svg, { Path, Rect, Circle, Image, ClipPath, G } from "react-native-svg";
import { areaRadial, curveBasis } from "d3-shape";
import SvgCircleData from "./SvgCircleData";
import { useRoute } from "@react-navigation/native";
import { TabNavigatorRouteProp } from "../navigation/FindYourPathButtomTabNavigator";
import Typography from "../../../components/Typography";
import { Text } from "@rneui/themed";
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
  to: SvgCircleData.length - 30,
});
const CenterStats = () => {
  return (
    <View style={styles.statsContainer}>
      <Text
        style={{
          includeFontPadding: false,
          height: 40,
        }}
      >
        <Typography
          bold
          white
          size={40}
          style={{
            includeFontPadding: false,
            textAlignVertical: "top",
            fontWeight: "800",
          }}
        >
          6.8
        </Typography>
        <Typography white size={20}>
          km
        </Typography>
      </Text>
      <Typography small white size={15}>
        of 10km left
      </Typography>
    </View>
  );
};
const SvgCircle = () => {
  return (
    <View style={{ aspectRatio: 1, flex: 1 }}>
      <Svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        // preserveAspectRatio="xMinYMid meet"
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
            // href={path.source}
            width="150%"
            height="100%"
            // preserveAspectRatio="xMidYMid meet"
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
  );
};
export default () => {
  const route = useRoute<TabNavigatorRouteProp>();
  const { path } = route.params;
  return (
    <View style={styles.svgContainer}>
      <SvgCircle></SvgCircle>
      <CenterStats></CenterStats>
    </View>
  );
};
const styles = StyleSheet.create({
  svgContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.white,
    overflow: "hidden",
  },
  statsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
