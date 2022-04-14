import React from "react";
import { View, ScrollView, Text } from "react-native";
import { ISavedPath } from "../../../components/PathCard";
import { StyleSheet, Dimensions } from "react-native";
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

import { theme } from "../../../constants/theme";
import Typography from "../../../components/Typography";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import SvgCircle from "./SvgCircle";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../navigation/FindYourPathButtomTabNavigator";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";

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

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList, "FindYourPathButtomTabNavigator">
>;

// type TabNavigatorRouteProp = RouteProp<TabParamList, "DetailsStack2">;

// interface Props2 {
//   navigation: BottomTabNavigationProp<TabParamList, keyof TabParamList>;
//   route: TabNavigatorRouteProp;
// }

interface FindYourPathDetailsProps {
  savedPath: ISavedPath;
}

export default () => {
  const navigation = useNavigation<NavigationProp>();
  const onPressBack: () => void = () => {
    console.log("pressed");
    navigation.navigate("FindYourPath");
  };

  return (
    <View>
      <Animated.View>
        <RectButton
          {...{
            onPress: onPressBack,
            style: {
              marginBottom: 20,
              backgroundColor: "white",
              height: 50,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 10,
            },
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>GO BACK</Text>
        </RectButton>
      </Animated.View>

      <View style={styles.container}>
        {/*Top level container should not be flex: 1, should be handled by navigation component */}
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
              <View style={{ flex: 1 }}>
                <SvgXml xml={cursorIcon} width={10} height={10} />
              </View>
            </View>
          </View>
        </View>
        <SvgCircle></SvgCircle>
      </View>
    </View>

    // <View style={{ flex: 1 }}>
    //   <Animated.View>
    //     <RectButton
    //       {...{
    //         onPress: onPressBack,
    //         style: {
    //           marginBottom: 20,
    //           backgroundColor: "white",
    //           height: 50,
    //           borderRadius: 35,
    //           alignItems: "center",
    //           justifyContent: "center",
    //           marginVertical: 5,
    //           shadowOffset: { width: 2, height: 2 },
    //           shadowColor: "black",
    //           shadowOpacity: 0.2,
    //           elevation: 10,
    //         },
    //       }}
    //     >
    //       <Text style={{ fontSize: 20, fontWeight: "bold" }}>GO BACK</Text>
    //     </RectButton>
    //   </Animated.View>
    //   {/* <View style={{backgroundColor:"magenta", alignItems:"center", justifyContent:"center", flex:1}}><Text>FILL</Text></View>
    //    */}
    //   <View style={styles.container}>
    //     <View style={styles.infoContainer}>
    //       <View style={styles.infoLeft}>
    //         <View
    //           style={{
    //             marginRight: 10,
    //             backgroundColor: theme.colors.white2,
    //             width: 30,
    //             height: 30,
    //             borderRadius: 20,
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <SvgXml xml={moonIcon} width={10} height={10} />
    //         </View>
    //         <Typography size={16} medium gray2>
    //           23km
    //         </Typography>
    //       </View>
    //       <View style={styles.infoRight}>
    //         <Typography size={16} medium gray2>
    //           23km
    //         </Typography>

    //         <View
    //           style={{
    //             marginLeft: 10,
    //             backgroundColor: theme.colors.white2,
    //             width: 30,
    //             height: 30,
    //             borderRadius: 20,
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <SvgXml xml={cursorIcon} width={10} height={10} />
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.svgContainer}>
    //     <View style={{ aspectRatio: 1 }}>
    //       {/* <Svg width={width} height="320"> */}
    //       <Svg height="100%" width="100%" viewBox="0 0 100 100">
    //         <Path
    //           y={50}
    //           x={50}
    //           stroke-width="1"
    //           stroke={theme.colors.white2}
    //           fill={theme.colors.white2}
    //           d={d}
    //         />
    //         <Path
    //           y={50}
    //           x={50}
    //           stroke-width="1"
    //           stroke={theme.colors.primary}
    //           fill={theme.colors.primary}
    //           d={dPartial}
    //         />
    //         <ClipPath id="clip">
    //           <Circle r={37.5} cx={50} cy={50}></Circle>
    //         </ClipPath>
    //         <G>
    //           <Image
    //             href={require("../../../../assets/backgroundImages/2d97b675051427.5c41b8c7ccdb8.jpg")}
    //             width={width / 2}
    //             height={80}
    //             y={10}
    //             preserveAspectRatio="xMidYMax slice"
    //             clipPath="url(#clip)"
    //           />
    //           <Rect
    //             opacity={0.5}
    //             fill="grey"
    //             width={width / 2}
    //             height={80}
    //             y={10}
    //             clipPath="url(#clip)"
    //           />
    //         </G>
    //       </Svg>
    //     </View>
    //   </View>
    //   </View>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "magenta",
    // flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 45,
    backgroundColor: theme.colors.white,
  },
  infoContainer: {
    // flex: 0.4,
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
  statsContainer: {
    // flex: 0.5,
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
    // flex: 1.2,
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
