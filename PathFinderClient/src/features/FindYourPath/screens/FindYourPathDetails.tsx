import React from "react";
import { View, ScrollView, Text } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import * as d3 from "d3-shape";

import { theme } from "../../../constants/theme";
import {
  CompositeNavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  TabNavigatorRouteProp,
  TabParamList,
} from "../navigation/FindYourPathButtomTabNavigator";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";

import TopInfo from "./TopInfo";
import SvgSection from "./SvgSection";
import MiddleInfo from "./MiddleInfo";
import NavSection from "./NavSection";
type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList, "FindYourPathButtomTabNavigator">
>;

// type TabNavigatorRouteProp = RouteProp<TabParamList, "DetailsStack2">;

// interface Props2 {
//   navigation: BottomTabNavigationProp<TabParamList, keyof TabParamList>;
//   route: TabNavigatorRouteProp;
// }

export default () => {
  const navigation = useNavigation<NavigationProp>();
  const onPressBack: () => void = () => {
    console.log("pressed");
    navigation.navigate("FindYourPath");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.25 }}>
        <TopInfo></TopInfo>
      </View>
      <View style={{ flex: 2 }}>
        <SvgSection></SvgSection>
      </View>
      <View style={{ flex: 0.5 }}>
        <MiddleInfo></MiddleInfo>
      </View>
      <View style={{ flex: 1 }}>
        <NavSection></NavSection>
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
    marginTop: theme.sizes.base *2,
    backgroundColor: "magenta",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 45,
    // backgroundColor: theme.colors.white,
  },
});
