import React from "react";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../../../navigation/buttomTab/TabBar";
import FindYourPathMap from "../screens/FindYourPathMap";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "./FindYoutPathStackNavigatior";
import { StackNavigationProp } from "@react-navigation/stack";
import FindYourPathDetails from "../screens/FindYourPathDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";

//Specifying undefined means that the route doesn't have params
export type TabParamList = {
  FindYourPathDetails: undefined;
  FindYourPathMap: undefined;
};
// interface ISubNavigator<T, K extends keyof T> {
//   screen: K;
//   params?: T[K];
// }
// export type TabParamList = {
//   FindYourPathDetails: ISubNavigator<
//     StackParamList,
//     "FindYourPathButtomTabNavigator"
//   >;
//   FindYourPathMap: undefined;
// };

// type TabNavigatorRouteProp = RouteProp<
//   StackParamList,
//   "FindYourPathButtomTabNavigator"
// >;

// type TabNavigatorNavigationProp = StackNavigationProp<
//   StackParamList,
//   "FindYourPathButtomTabNavigator"
// >;
// interface TabNavigatonProp {
//   route: TabNavigatorRouteProp;
//   navigation: TabNavigatorNavigationProp;
// }

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: "#e91e63",
      // }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="FindYourPathDetails"
        options={{
          header: () => <></>,
          tabBarIcon: () => <Icon name={"compass"} color={"white"} size={34} />,
        }}
      >
        {(props) => (
          <View style={{ flex: 1 }}>
            <FindYourPathDetails></FindYourPathDetails>
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="FindYourPathMap"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"map"} color={color} size={size} />
          ),
        }}
        component={FindYourPathMap}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
