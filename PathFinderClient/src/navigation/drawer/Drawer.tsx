import React from "react";
import { StyleSheet, View } from "react-native";
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

import FindYoutPathStackNavigatior from "../../featutes/FindYourPath/navigation/FindYoutPathStackNavigatior";
import CreateNewPathStackNavigator from "../../featutes/CreateNewPath/navigation/CreateNewPathStackNavigator";
// import SelectOptions from "../../features/Options/screens/SelectOptions";
// import OptionsStackNavigator from "../../features/Options/navigation/OptionsStackNavigator";

const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: "60%", backgroundColor: "#2A4337" },
  contentContainerStyle: {},
  drawerItem: {},
  drawerLabel: { color: "white", marginLeft: -16 },
});

export type DrawerParamList = {
  FindYoutPathStackNavigatior: undefined;
  CreateNewPath: undefined;
  Options: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
interface DrawerComponentProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
  setProgress: React.Dispatch<React.SetStateAction<Animated.Node<number>>>;
}

const DrawerContent = ({ props, setProgress }: DrawerComponentProps) => {
  React.useEffect(() => {
    setProgress(props.progress);
  }, []);
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <DrawerItem
        label="FindYourPath"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("FindYoutPathStackNavigatior")}
        icon={() => <AntDesign name="dashboard" color="white" size={26} />}
      />
      <DrawerItem
        label="CreateNewPath"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("CreateNewPath")}
        icon={() => <AntDesign name="message1" color="white" size={26} />}
      />
      <DrawerItem
        label="Options"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("Options")}
        icon={() => <AntDesign name="message1" color="white" size={26} />}
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
          return (
            <DrawerContent
              props={props}
              setProgress={setProgress}
            ></DrawerContent>
          );

          // setProgress(props.progress);
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
        <Drawer.Screen name="Options">
          {(props) =>
            // <DrawerScreen
            //   {...props}
            //   animatedStyle={animatedStyle}
            // ></DrawerScreen>
            null
          }
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
