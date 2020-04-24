import React from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { Feather, AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FindYourPathPhotos from "../../screen/Paths/FindYourPathPhotos";
import FindYourPathMap from "../../screen/Paths/FindYourPathMap";
import FindYourPath from "../../screen/Paths/FindYourPath";
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    // elevation: 3,
    overflow: "hidden"
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: "50%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 }
});

const Drawer = createDrawerNavigator();

interface ScreenProps {
  children: JSX.Element;
  navigation: any;
  animatedStyle: {
    borderRadius: Animated.Node<number>;
    transform: {
      scale: Animated.Node<number>;
    }[];
  };
}
const DrawerScreen = ({ navigation, animatedStyle, children }: ScreenProps) => {
  return (
    <Animated.View
      //   style={[StyleSheet.flatten([styles.stack, animatedStyle]), {}]}
      style={[
        StyleSheet.flatten([animatedStyle]),
        StyleSheet.absoluteFill,
        { backgroundColor: "red" }
      ]}
    >
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Feather
            name="menu"
            size={18}
            color="black"
            style={{ paddingHorizontal: 10 }}
          />
        </TouchableWithoutFeedback>
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

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
        label="FindYourPathMaps"
        labelStyle={{ color: "white", marginLeft: -16 }}
        style={{ alignItems: "flex-start", marginVertical: 0 }}
        onPress={() => props.navigation.navigate("FindYourPathMaps")}
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
    outputRange: [0, 16]
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#E94057", "#4A00E0"]}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white"
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="FindYourPathMap" component={FindYourPathMap} />
      </Drawer.Navigator>
    </LinearGradient>
  );
};
