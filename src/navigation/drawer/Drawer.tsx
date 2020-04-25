import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem,
  DrawerNavigationProp
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Feather, AntDesign } from "@expo/vector-icons";
import FindYourPath from "../../screen/Paths/FindYourPath";
import DrawerScreen from "../../screen/Paths/DrawerScreen";
import PathBottomNavigator from "../../screen/Paths/PathBottomNavigator";
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: "hidden"
  },
  drawerStyles: { flex: 1, width: "60%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 }
});

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  FindYourPath: undefined;
  FindYourPathMap: undefined;
  FindYourPathPhotos: undefined;
};

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1, width: 800 }}
    >
      <DrawerItem
        label="FindYourPath"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("FindYourPath")}
        icon={() => <AntDesign name="dashboard" color="white" size={16} />}
      />
      <DrawerItem
        label="FindYourPathPhotos"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("FindYourPathPhotos")}
        icon={() => <AntDesign name="message1" color="white" size={16} />}
      />
      <DrawerItem
        label="FindYourPathMap"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("FindYourPathMap")}
        icon={() => <AntDesign name="phone" color="white" size={16} />}
      />
      <DrawerItem
        label="PathNavigator"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("PathNavigator")}
        icon={() => <AntDesign name="phone" color="white" size={16} />}
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
    outputRange: [1, 0.8]
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 36]
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#2A4337", "#2A4337"]}>
      <Drawer.Navigator
        // hideStatusBar
        edgeWidth={80}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        drawerContentOptions={{
          activeBackgroundColor: "#2A4337",
          activeTintColor: "white",
          inactiveTintColor: "white"
        }}
        sceneContainerStyle={{ backgroundColor: "#2A4337" }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="FindYourPath">
          {props => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <FindYourPath></FindYourPath>
            </DrawerScreen>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="FindYourPathMap">
          {props => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <Text>FindYourPathMap</Text>
            </DrawerScreen>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="FindYourPathPhotos">
          {props => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <Text>FindYourPathPhotos</Text>
            </DrawerScreen>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="PathNavigator">
          {props => (
            <DrawerScreen {...props} animatedStyle={animatedStyle}>
              <PathBottomNavigator></PathBottomNavigator>
            </DrawerScreen>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
