import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FindYourPath from "../screens/FindYourPath";
import { IPath, savedPaths } from "../../../components/PathCard";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";
import FindYourPathDetails from "../screens/FindYourPathDetails";
import FindYourPathButtomTabNavigator from "./FindYourPathButtomTabNavigator";

//Specifying undefined means that the route doesn't have params
export type StackParamList = {
  FindYourPath: undefined;
  FindYourPathButtomTabNavigator: { path: IPath };
};
const Stack = createStackNavigator<StackParamList>();

export default () => {
  return (
    // <NavigationContainer
    //   independent={true}
    //   // theme={{
    //   //   dark: false,
    //   //   colors: {
    //   //     primary: "#2A4337",
    //   //     background: "#2A4337",
    //   //     card: "#2A4337",
    //   //     text: "#2A4337",
    //   //     border: "#2A4337",
    //   //     notification: "#2A4337",
    //   //   },
    //   // }}
    // >
    <Stack.Navigator
      // initialRouteName="FindYourPath"
      initialRouteName="FindYourPathButtomTabNavigator"
    >
      {/* <Stack.Screen
          name="FindYourPath"
          component={() => <></>}
          options={{
            header: () => <DrawerHeader {...{ navigation }}></DrawerHeader>,
          }}
        ></Stack.Screen> */}
      <Stack.Screen
        name="FindYourPath"
        options={{
          header: () => <></>,
        }}
        // component={FindYourPath}
      >
        {(props) => (
          <View style={{ flex: 1 }}>
            <View>
              <DrawerHeader />
            </View>
            <View style={{ flex: 1, zIndex: -1 }}>
              <FindYourPath></FindYourPath>
            </View>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen
        initialParams={{ path: savedPaths[0] }}
        name="FindYourPathButtomTabNavigator"
        options={{
          header: () => <></>,
        }}
        // component={FindYourPathButtomTabNavigator}
        // options={{
        //   headerStatusBarHeight: 0,
        //   headerBackAllowFontScaling: true,
        //   headerStyle: {
        //     height: 45,
        //   },
        // }}
      >
        {(props) => (
          <View style={{ flex: 1 }}>
            <View>
              <DrawerHeader />
            </View>
            <View style={{ flex: 1, zIndex: -1 }}>
              {/* <FindYourPathDetails/> */}
              <FindYourPathButtomTabNavigator />
            </View>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
