import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import { createAppContainer } from "react-navigation";
import FindYourPath from "../../screen/Paths/FindYourPath";
import FindYourPathMap from "../../screen/Paths/FindYourPathMap";
import FindYourPathPhotos from "../../screen/Paths/FindYourPathPhotos";
import tabBar from "./tabBar";

const tabNavigator = createBottomTabNavigator(
  {
    FindYourPath: {
      screen: FindYourPath,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="compass" color={tintColor} size={34} />
        )
      })
    },
    Maps: {
      screen: FindYourPathMap,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="map-marker" color={tintColor} size={34} />
        )
      })
    },
    Photos: {
      screen: FindYourPathPhotos,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="image" color={tintColor} size={34} />
        )
      })
    }
  },
  {
    tabBarComponent: tabBar,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#FDFDFB",
      inactiveTintColor: "#4c575c"
    }
  }
);
const AppNavigator = createAppContainer(tabNavigator);
export default () => {
  return <AppNavigator></AppNavigator>;
};
