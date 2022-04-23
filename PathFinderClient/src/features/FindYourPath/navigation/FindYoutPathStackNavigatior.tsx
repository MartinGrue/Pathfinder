import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FindYourPath from "../screens/FindYourPath";
import { IPath, savedPaths } from "../../../components/PathCard";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";
import FindYourPathButtomTabNavigator from "./FindYourPathButtomTabNavigator";

//Specifying undefined means that the route doesn't have params
export type StackParamList = {
  FindYourPath: undefined;
  FindYourPathButtomTabNavigator: { path: IPath };
};
const Stack = createStackNavigator<StackParamList>();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="FindYourPath"
      // initialRouteName="FindYourPathButtomTabNavigator"
    >
      <Stack.Screen
        name="FindYourPath"
        options={{
          header: () => <></>,
        }}
      >
        {(props) => (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <DrawerHeader />
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
      >
        {(props) => (
          <View style={{ flex: 1 }}>
            <DrawerHeader />
            <View style={{ flex: 1, zIndex: -1 }}>
              <FindYourPathButtomTabNavigator />
            </View>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
