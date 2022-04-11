import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "../../../utils/NavigationService";
import SignIn from "../screens/SignIn";
import InitScreen from "../screens/InitScreen";
import Drawer from "../../../navigation/drawer/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../../contexts/AuthContext";
export type RootStackParamList = {
  SignIn: {};
  MainFlow: {};
  Init: {};
};
const Stack = createStackNavigator<RootStackParamList>();
export default () => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean | undefined>(true);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext &&
      authContext.tryLocalSignin().then((value) => {
        setisLoggedIn(value);
      });
    // authContext && console.log("this is a token: " + authContext.state.token);
  }, []);

  // if (authContext && authContext.state.isLoading) {
  //   return <InitScreen></InitScreen>;
  // }
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "MainFlow" : "SignIn"}
        screenOptions={{ header: () => null }}
        // headerMode="none"
      >
        {/* <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </> */}
        <>
          <Stack.Screen name="MainFlow" component={Drawer} />
        </>
        {/* {authContext && authContext.state.token === null ? (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
            </>
          ) : (
            <>
              <Stack.Screen name="MainFlow" component={Drawer} />
            </>
          )} */}
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
