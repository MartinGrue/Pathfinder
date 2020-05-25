import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FindYourPathButtomTabNavigator from "./FindYourPathButtomTabNavigator";
import FindYourPath from "../screens/FindYourPath";
import StackHeader from "../../../navigation/stack/StackHeader";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import { ISavedPath } from "../../../components/PathCard";

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
      <Stack.Navigator>
        <Stack.Screen
          name="FindYourPath"
          component={FindYourPath}
          options={{
            header: (props) => <StackHeader {...{ navigation }} />,
          }}
        />
        <Stack.Screen
          name="FindYourPathButtomTabNavigator"
          component={FindYourPathButtomTabNavigator}
        />
      </Stack.Navigator>
    </View>
  );
};
