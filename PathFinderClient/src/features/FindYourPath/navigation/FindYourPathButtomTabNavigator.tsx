import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../../../navigation/buttomTab/TabBar";
import FindYourPathMap from "../screens/FindYourPathMap";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "./FindYoutPathStackNavigatior";
import FindYourPathDetails from "../screens/FindYourPathDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { IPath } from "../../../components/PathCard";

//Specifying undefined means that the route doesn't have params
export type TabParamList = {
  FindYourPathDetails: {
    path: IPath;
  };
  FindYourPathMap: undefined;
};

export type TabNavigatorRouteProp = RouteProp<
  StackParamList,
  "FindYourPathButtomTabNavigator"
>;

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
  const route = useRoute<TabNavigatorRouteProp>();
  const { path } = route.params;
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="FindYourPathDetails"
        initialParams={{ path }}
        options={{
          header: () => <></>,
          tabBarIcon: () => <Icon name={"compass"} color={"white"} size={34} />,
        }}
      >
        {(props) => (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <FindYourPathDetails />
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
