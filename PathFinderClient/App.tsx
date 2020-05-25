import React, { useState } from "react";
import Drawer from "./src/navigation/drawer/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/features/login/SignIn";

export type RootStackParamList = {
  SignIn: undefined;
  MainFlow: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="MainFlow" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
