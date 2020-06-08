import React from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import DrawerScreen from "./DrawerScreen";
import FindYoutPathStackNavigatior from "../../features/FindYourPath/navigation/FindYoutPathStackNavigatior";
import CreateNewPathStackNavigator from "../../features/CreateNewPath/navigation/CreateNewPathStackNavigator";
import RadialLine from "../../radialLineTest/RadialLine";
const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: "60%", backgroundColor: "#2A4337" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 },
});

export type DrawerParamList = {
  FindYoutPathStackNavigatior: undefined;
  CreateNewPath: undefined;
  RadialLine: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <DrawerItem
        label="FindYourPath"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("FindYoutPathStackNavigatior")}
        icon={() => <AntDesign name="dashboard" color="white" size={16} />}
      />
      <DrawerItem
        label="CreateNewPath"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("CreateNewPath")}
        icon={() => <AntDesign name="message1" color="white" size={16} />}
      />
      <DrawerItem
        label="RadialLine"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("RadialLine")}
        icon={() => <AntDesign name="message1" color="white" size={16} />}
      />
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState<Animated.Node<number>>(
    new Animated.Value(0)
  );
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 36],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#2A4337", "#2A4337"]}>
      <Drawer.Navigator
        // hideStatusBar
        initialRouteName="FindYoutPathStackNavigatior"
        edgeWidth={80}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        drawerContentOptions={{
          activeBackgroundColor: "#2A4337",
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
        sceneContainerStyle={{ backgroundColor: "#2A4337" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="FindYoutPathStackNavigatior">
          {(props) => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <FindYoutPathStackNavigatior
                {...props}
              ></FindYoutPathStackNavigatior>
            </DrawerScreen>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="CreateNewPath">
          {(props) => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <CreateNewPathStackNavigator
                {...props}
              ></CreateNewPathStackNavigator>
            </DrawerScreen>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="RadialLine">
          {(props) => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <RadialLine></RadialLine>
            </DrawerScreen>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
