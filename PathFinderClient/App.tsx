import React from "react";
import Drawer from "./src/navigation/drawer/Drawer";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  return <NavigationContainer>{<Drawer></Drawer>}</NavigationContainer>;
};
