import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "../../utils/NavigationService";
import SignIn from "../../features/login/SignIn";
import Drawer from "../drawer/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../contexts/AuthContext";
import InitScreen from "../../features/login/InitScreen";
export type RootStackParamList = {
  SignIn: {};
  MainFlow: {};
  Init: {};
};
const Stack = createStackNavigator<RootStackParamList>();
export default () => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean | undefined>(undefined);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext && console.log(authContext.state.token);
    authContext &&
      authContext.tryLocalSignin().then((value) => {
        setisLoggedIn(value);
      });
    authContext && console.log(authContext.state.token);
  }, []);
  authContext && console.log(isLoggedIn);
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
        {isLoggedIn === undefined ? (
          <>
            <Stack.Screen name="Init" component={InitScreen} />
          </>
        ) : isLoggedIn == true ? (
          <>
            <Stack.Screen name="MainFlow" component={Drawer} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
