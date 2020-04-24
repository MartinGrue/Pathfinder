import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FindYourPath from "./src/screen/Paths/FindYourPath";
import Icon from "react-native-vector-icons/FontAwesome";
import FindYourPathPhotos from "./src/screen/Paths/FindYourPathPhotos";
import FindYourPathMap from "./src/screen/Paths/FindYourPathMap";
import tabBar from "./src/navigation/bottomNavigation/tabBar";
import { createAppContainer } from "react-navigation";

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
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#4c575c",
      style: {
        backgroundColor: "green"
      },
      tabStyle: {}
    }
  }
);
const AppNavigator = createAppContainer(tabNavigator);
export default () => {
  return <AppNavigator></AppNavigator>;
};
