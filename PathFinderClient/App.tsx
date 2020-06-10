import React, { useState } from "react";
import Drawer from "./src/navigation/drawer/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/features/login/SignIn";
import NavigationService from "./src/utils/NavigationService";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import AuthNavigator from "./src/navigation/authNavigation/AuthNavigator";

export default () => {
  return (
    <AuthProvider>
      <AuthNavigator></AuthNavigator>
    </AuthProvider>
  );
};
