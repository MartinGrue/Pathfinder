import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "../../../utils/NavigationService";
import SignIn from "../screens/SignIn";
import InitScreen from "../screens/InitScreen";
import Drawer from "../../../navigation/drawer/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../../contexts/AuthContext";
import { View } from "react-native";
export type RootStackParamList = {
  SignIn: {};
  MainFlow: {};
  Init: {};
};
const Stack = createStackNavigator<RootStackParamList>();
export default () => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean | undefined>(false);
  const authContext = useContext(AuthContext);
  const { token } = authContext!.state;
  useEffect(() => {
    authContext &&
      authContext.tryLocalSignin().then((value) => {
        setisLoggedIn(value);
      });
  }, []);

  if (authContext && authContext.state.isLoading) {
    return <InitScreen></InitScreen>;
  }
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      //This is needed to prevent some white pixel flickering on drawer movement
      theme={{
        dark: false,
        colors: {
          primary: "#2A4337",
          background: "#2A4337",
          card: "#2A4337",
          text: "#2A4337",
          border: "#2A4337",
          notification: "#2A4337",
        },
      }}
    >
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "MainFlow" : "SignIn"}
        screenOptions={{ header: () => null }}
        // headerMode="none"
      >
        {authContext && token === null ? (
          <Stack.Screen name="SignIn" component={SignIn} />
        ) : (
          <Stack.Screen name="MainFlow" component={Drawer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
