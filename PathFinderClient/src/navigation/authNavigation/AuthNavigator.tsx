import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "../../utils/NavigationService";
import SignIn from "../../features/login/SignIn";
import Drawer from "../drawer/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "../../contexts/AuthContext";
import InitScreen from "../../features/login/InitScreen";
export type RootStackParamList = {
  SignIn: {};
  MainFlow: {};
  Init: {};
};
const Stack = createStackNavigator<RootStackParamList>();
export default () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext &&
      authContext.tryLocalSignin().then((value) => {
        setisLoggedIn(value);
      });
  }, []);
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Stack.Navigator
        // initialRouteName={isLoggedIn ? "MainFlow" : "SignIn"}
        initialRouteName="Init"
        screenOptions={{ header: () => null }}
      >
        {isLoggedIn ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name="MainFlow" component={Drawer} />
          </>
        ) : (
          <>
            <Stack.Screen name="Init" component={InitScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
