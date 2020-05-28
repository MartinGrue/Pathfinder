import React, { useState } from "react";
import Drawer from "./src/navigation/drawer/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/features/login/SignIn";
import NavigationService from "./src/utils/NavigationService";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";

export type RootStackParamList = {
  SignIn: undefined;
  MainFlow: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <AuthProvider>
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      >
        <Stack.Navigator
          initialRouteName="MainFlow"
          screenOptions={{ header: () => null }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="MainFlow" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};
