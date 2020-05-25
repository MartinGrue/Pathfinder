import React from "react";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import FindYourPathMap from "../screens/FindYourPathMap";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "./FindYoutPathStackNavigatior";
import { StackNavigationProp } from "@react-navigation/stack";
import FindYourPathDetails from "../screens/FindYourPathDetails";

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

const Tab = createBottomTabNavigator<TabParamList>();
type TabNavigatorRouteProp = RouteProp<
  StackParamList,
  "FindYourPathButtomTabNavigator"
>;

type TabNavigatorNavigationProp = StackNavigationProp<
  StackParamList,
  "FindYourPathButtomTabNavigator"
>;
interface TabNavigatonProp {
  route: TabNavigatorRouteProp;
  navigation: TabNavigatorNavigationProp;
}
export default ({ navigation, route }: TabNavigatonProp) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="FindYourPathDetails">
        {(props) => (
          <FindYourPathDetails savedPath={route.params.savedPath}></FindYourPathDetails>
        )}
      </Tab.Screen>
      <Tab.Screen name="FindYourPathMap" component={FindYourPathMap}></Tab.Screen>
    </Tab.Navigator>
  );
};
