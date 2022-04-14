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
import FindYourPathDetails from "../screens/FindYourPathDetails";

//Specifying undefined means that the route doesn't have params
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
      initialRouteName="FindYourPath"
      // initialRouteName="FindYourPathButtomTabNavigator"

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
              <View >
                <DrawerHeader {...{ navigation }}></DrawerHeader>
              </View>
              <View style={{ flex:1, zIndex: -1 }}>
                <FindYourPath {...props}></FindYourPath>
              </View>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
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
                <DrawerHeader {...{ navigation }}></DrawerHeader>
              </View>
              <View style={{  flex: 1, zIndex: -1 }}>
                <FindYourPathDetails></FindYourPathDetails>
                {/* <FindYourPathButtomTabNavigator></FindYourPathButtomTabNavigator> */}
              </View>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    // </NavigationContainer>
  );
};
