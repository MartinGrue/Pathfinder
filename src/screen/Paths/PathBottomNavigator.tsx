import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import { createAppContainer } from "react-navigation";
import FindYourPath from "./FindYourPath";
import FindYourPathMap from "./FindYourPathMap";
import FindYourPathPhotos from "./FindYourPathPhotos";
import tabBar from "../../navigation/bottomNavigation/tabBar";

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
