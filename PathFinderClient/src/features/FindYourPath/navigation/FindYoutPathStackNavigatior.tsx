import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FindYourPathButtomTabNavigator from "./FindYourPathButtomTabNavigator";
import FindYourPath from "../screens/FindYourPath";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import { ISavedPath } from "../../../components/PathCard";
import Constants from "expo-constants";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";
export type StackParamList = {
  FindYourPath: undefined;
  FindYourPathButtomTabNavigator: { savedPath: ISavedPath };
};
const Stack = createStackNavigator<StackParamList>();
interface FindYoutPathStackNavigatiorProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation }: FindYoutPathStackNavigatiorProps) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator initialRouteName="FindYourPath">
        <Stack.Screen
          name="FindYourPath"
          component={FindYourPath}
          options={{
            header: () => <DrawerHeader {...{ navigation }}></DrawerHeader>,
          }}
        />
        <Stack.Screen
          name="FindYourPathButtomTabNavigator"
          component={FindYourPathButtomTabNavigator}
          options={{
            headerStatusBarHeight: 0,
            headerBackAllowFontScaling: true,
            headerStyle: {
              height: 45,
            },
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
