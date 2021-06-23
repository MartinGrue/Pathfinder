import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

import FindYoutPathStackNavigatior from "../../features///FindYourPath/navigation/FindYoutPathStackNavigatior";
import CreateNewPathStackNavigator from "../../features/CreateNewPath/navigation/CreateNewPathStackNavigator";
import { Avatar, ListItem } from "react-native-elements";
import Typography from "../../components/Typography";
// import SelectOptions from "../../features/Options/screens/SelectOptions";
// import OptionsStackNavigator from "../../features/Options/navigation/OptionsStackNavigator";

const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: "60%", backgroundColor: "#2A4337" },
  contentContainerStyle: { flex: 1 },
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar
          size="large"
          rounded
          source={require("../../../assets/hqdefault.jpg")}
          containerStyle={{ margin: 20 }}
          avatarStyle={{ borderWidth: 2, borderColor: "white" }}
          title={"Sam Walters"}
        />
        <View style={{}}>
          <Typography white weight="bold">
            Sam Walters
          </Typography>
          <Typography gray weight="100" style={{paddingTop:5}}>
            View Profile
          </Typography>
        </View>
      </View>

      {/* <View style={{ flex: 0.5, backgroundColor: "#fcba03" }}> */}
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

      {/* </View> */}
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
