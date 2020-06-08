import React from "react";
import { View, ScrollView } from "react-native";
import { ISavedPath } from "../../../components/PathCard";
import { Text } from "react-native-elements";
import { StyleSheet, Dimensions } from "react-native";
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
  G,
} from "react-native-svg";
import Marker from "react-native-svg";
import { scaleTime, scaleLinear } from "d3-scale";

import { SimpleLineIcons } from "@expo/vector-icons";
import { theme } from "../../../constants/theme";
import Typography from "../../../components/Typography";
const { width, height: wHeight } = Dimensions.get("window");

const markerRendering = `<svg xmlns="http://www.w3.org/2000/svg"
width="125" height="125" viewBox="0 0 125 125">
  <g fill="none" stroke-width="10" stroke="white">
  <path d="M 45 50 L 15 25 L 45 5"></path>
    <path  d="M 100 110 C 100 25 100 25 25 25"/>
  </g>
</svg>`;
const cursorIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 297.001 297.001" xml:space="preserve">
<path d="M290.444,119.548L14.488,0.818C10.721-0.805,6.343,0.032,3.436,2.93c-2.904,2.898-3.753,7.272-2.142,11.046l118.314,276.933
c1.581,3.698,5.212,6.092,9.227,6.092c0.033,0,0.065,0,0.1,0c4.053-0.04,7.684-2.515,9.203-6.272l43.921-108.598l108.205-44.074
c3.745-1.524,6.208-5.15,6.248-9.194C296.551,124.818,294.159,121.146,290.444,119.548z"/>
</svg>`;
const moonIcon = `<svg height="448pt" viewBox="-12 0 448 448.04455" width="448pt" xmlns="http://www.w3.org/2000/svg">
<path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031
14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031
94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005
100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"/>
</svg>`;
var points = [
  [0, 5],
  [5, 11],
  [6, 15],
  [7, 66],
  [8, 55],
  [9, 77],
  [5, 100],
  [6, 66],
  [7, 24],
  [8, 43],
  [9, 100],
  [5, 45],
  [6, 67],
  [7, 58],
  [8, 99],
  [9, 45],
  [5, 32],
  [6, 1],
  [7, 12],
  [8, 11],
  [9, 64],
  [5, 8],
  [6, 34],
  [7, 45],
  [8, 23],
  [9, 23],

  [5, 11],
  [6, 21],
  [7, 1],
  [8, 3],
  [9, 35],
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
    .curve(d3.curveBasis);
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
    .curve(d3.curveBasis);
  //   return `${d}`;
  return `${d5(partialData)}`;
};
const dPartial = getPartinalPath();
// type ProfileScreenNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<TabParamList>,
//   StackNavigationProp<StackParamList, "FindYourPathButtomTabNavigator">
// >;

// type TabNavigatorRouteProp = RouteProp<TabParamList, "DetailsStack2">;

// interface Props2 {
//   navigation: BottomTabNavigationProp<TabParamList, keyof TabParamList>;
//   route: TabNavigatorRouteProp;
// }

interface FindYourPathDetailsProps {
  savedPath: ISavedPath;
}
export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoLeft}>
          <View
            style={{
              marginRight: 10,
              backgroundColor: theme.colors.white2,
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml xml={moonIcon} width={10} height={10} />
          </View>
          <Typography size={16} medium gray2>
            23km
          </Typography>
        </View>
        <View style={styles.infoRight}>
          <Typography size={16} medium gray2>
            23km
          </Typography>
          <View
            style={{
              marginLeft: 10,
              backgroundColor: theme.colors.white2,
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml xml={cursorIcon} width={10} height={10} />
          </View>
        </View>
      </View>
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
              <Circle r={37.5} cx={50} cy={50}></Circle>
            </ClipPath>
            <G>
              <Image
                href={require("../../../../assets/backgroundImages/2d97b675051427.5c41b8c7ccdb8.jpg")}
                width={width / 2}
                height={80}
                y={10}
                preserveAspectRatio="xMidYMax slice"
                clipPath="url(#clip)"
              />
              <Rect
                opacity={0.5}
                fill="grey"
                width={width / 2}
                height={80}
                y={10}
                clipPath="url(#clip)"
              />
            </G>
          </Svg>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
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
              <Typography> </Typography>
            </Text>
            <Typography small white size={15}>
              of 10km left
            </Typography>
          </View>
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
        <View style={[styles.stats]}>
          <Typography size={16} medium gray2>
            Elapsed Time
          </Typography>
          <Typography size={16} bold primary>
            02:21:56
          </Typography>
        </View>
      </View>

      <View style={styles.routingContainer}>
        <View style={styles.routingContainer2}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 45,
    backgroundColor: theme.colors.white,
  },
  infoContainer: {
    flex: 0.4,
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoRight: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  svgContainer: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },
  statsContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  stats: {
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.sizes.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "transparent",
    borderBottomColor: theme.colors.gray2,
  },
  routingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  routingContainer2: {
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    backgroundColor: theme.colors.white2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: theme.sizes.radius,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
    flexDirection: "column",
    paddingLeft: 20,
  },
});
