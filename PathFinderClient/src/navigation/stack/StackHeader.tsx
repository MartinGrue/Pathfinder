import React from "react";
import { StyleSheet, View } from "react-native";
import DrawerHeader from "../drawer/DrawerHeader";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../drawer/Drawer";

interface FindYoutPathStackNavigatiorProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation }: FindYoutPathStackNavigatiorProps) => {
  return (
    <View>
      <DrawerHeader {...{ navigation }}></DrawerHeader>
    </View>
  );
};

const styles = StyleSheet.create({});
