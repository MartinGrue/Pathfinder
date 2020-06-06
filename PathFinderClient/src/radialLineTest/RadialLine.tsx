import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as d3 from "d3-shape";
import Svg, {
  Path,
  Rect,
  Circle,
  Image,
  ClipPath,
  Defs,
  SvgXml,
} from "react-native-svg";
import Marker from "react-native-svg";
import { scaleTime, scaleLinear } from "d3-scale";
import { theme } from "../constants/theme";
import Typography from "../components/Typography";
import { SimpleLineIcons } from "@expo/vector-icons";

const { width, height: wHeight } = Dimensions.get("window");

const markerRendering = `<svg xmlns="http://www.w3.org/2000/svg"
width="125" height="125" viewBox="0 0 125 125">
  <g fill="none" stroke-width="10" stroke="white">
  <path d="M 45 50 L 15 25 L 45 5"></path>
    <path  d="M 100 110 C 100 25 100 25 25 25"/>
  </g>
</svg>`;

var points = [
  [0, 100],
  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],
  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],
  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],
  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],
  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],

  [5, 100],
  [6, 100],
  [7, 100],
  [8, 100],
  [9, 100],
  [10, 12],
  [11, 11],
  [12, 13],
  [13, 14],
  [14, 11],
  [15, 10],
  [16, 10],
  [17, 11],

  [1, 11],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 11],
  [1, 11],
  [1, 11],
  [1, 11],
] as [number, number][];

const getPath = (): string => {
  var d5 = d3
    .areaRadial()
    .outerRadius((d, i) => {
      return d[1] / 20 + 45;
    })
    .angle((d, i) => {
      return (i / (points.length - 1)) * Math.PI * 2;
    })
    .innerRadius((d, i) => {
      return 45;
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
      return d[1] / 20 + 45;
    })
    .angle((d, i) => {
      return (i / (points.length - 1)) * Math.PI * 2;
    })
    .innerRadius((d, i) => {
      return 45;
    })
    .curve(d3.curveLinear);
  //   return `${d}`;
  return `${d5(partialData)}`;
};
const dPartial = getPartinalPath();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.svgContainer}>
        <View style={{ aspectRatio: 1 }}>
          {/* <Svg width={width} height="320"> */}
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            <Path
              y={50}
              x={50}
              stroke-width="1"
              stroke={theme.colors.white2}
              fill={theme.colors.white2}
              d={d}
            />
            <Path
              y={50}
              x={50}
              stroke-width="1"
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              d={dPartial}
            />
            <ClipPath id="clip">
              <Circle r={37.5} cx={50} cy={50} fill="green"></Circle>
            </ClipPath>
            <Image
              href={require("../../assets/backgroundImages/2d97b675051427.5c41b8c7ccdb8.jpg")}
              width={width/2}
              height={80}
              y={10}
              preserveAspectRatio="xMidYMax slice"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Typography size={16} medium gray2>
            Elevation
          </Typography>
          <Typography size={16} bold primary>
            348m
          </Typography>
        </View>
        <View style={styles.stats}>
          <Typography size={16} medium gray2>
            Elapsed Time
          </Typography>
          <Typography size={16} bold primary>
            02:21:56
          </Typography>
        </View>
      </View>

      <View style={styles.routingContainer}>
        <View style={styles.directionIcon}>
          <SvgXml xml={markerRendering} width={25} height={25} />
        </View>
        <View style={styles.directionText}>
          <Typography size={16} small gray2>
            02:21:56
          </Typography>
          <Typography size={22} bold primary>
            02:21:56
          </Typography>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    justifyContent: "flex-start",
  },
  svgContainer: {
    flexDirection: "column",
    paddingHorizontal: 55,
    paddingVertical: 25,
  },
  statsContainer: { flex: 2 },
  stats: {
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.sizes.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "transparent",
    borderBottomColor: theme.colors.gray2,
  },
  routingContainer: {
    flex: 1,
    marginVertical: theme.sizes.base,
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    backgroundColor: theme.colors.white2,
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderRadius: theme.sizes.radius,
    flexDirection: "row",
  },
  directionIcon: {
    width: 75,
    height: 75,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  directionText: {
    alignSelf: "flex-end",
    flexDirection: "column",
    paddingLeft: 20,
  },
});
