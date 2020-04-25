import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/navigation/drawer/Drawer";

export default () => {
  return <NavigationContainer>{<Drawer></Drawer>}</NavigationContainer>;
};
