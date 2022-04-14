import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import DrawerScreen from "./DrawerScreen";

import FindYoutPathStackNavigatior from "../../features///FindYourPath/navigation/FindYoutPathStackNavigatior";
import CreateNewPathStackNavigator from "../../features/CreateNewPath/navigation/CreateNewPathStackNavigator";
import Typography from "../../components/Typography";
import { Avatar } from "@rneui/base";
// import SelectOptions from "../../features/Options/screens/SelectOptions";
// import OptionsStackNavigator from "../../features/Options/navigation/OptionsStackNavigator";

export type DrawerParamList = {
  FindYoutPathStackNavigatior: undefined;
  CreateNewPath: undefined;
  Options: undefined;
};

interface DrawerComponentProps {
  props: DrawerContentComponentProps;
}

const DrawerContent = ({ props }: DrawerComponentProps) => {
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
          <Typography gray weight="100" style={{ paddingTop: 5 }}>
            View Profile
          </Typography>
        </View>
      </View>

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
  const Drawer = createDrawerNavigator<DrawerParamList>();

  return (
    <Drawer.Navigator
      initialRouteName="FindYoutPathStackNavigatior"
      screenOptions={{
        header: () => <></>,
        drawerType: "slide",
        swipeEdgeWidth: 80,
        overlayColor: "transparent",
        drawerStyle: styles.drawerStyles,
        sceneContainerStyle: {
          backgroundColor: "#2A4337",
        },
      }}
      drawerContent={(props) => <DrawerContent props={props}></DrawerContent>}
    >
      <Drawer.Screen name="FindYoutPathStackNavigatior">
        {(props) => (
          
          <DrawerScreen {...props}>
            <FindYoutPathStackNavigatior
              {...props}
            ></FindYoutPathStackNavigatior>
          </DrawerScreen>
        )}
      </Drawer.Screen>
      {/* <Drawer.Screen name="CreateNewPath">
          {(props) => (
            <DrawerScreen {...{ ...props, animatedScreenStyle }}>
              <CreateNewPathStackNavigator
                {...props}
              ></CreateNewPathStackNavigator>
            </DrawerScreen>
          )}
        </Drawer.Screen> */}
      <Drawer.Screen name="Options">
        {(props) => (
          <DrawerScreen {...props}>
            <View></View>
          </DrawerScreen>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  drawerStyles: {
    flex: 1,
    width: "60%",
    backgroundColor: "#2A4337",
    borderWidth: 2,
    borderColor: "#2A4337",
  },
  contentContainerStyle: { flex: 1, backgroundColor: "#2A4337" },
  drawerItem: {},
  drawerLabel: { color: "white", marginLeft: -16 },
});
