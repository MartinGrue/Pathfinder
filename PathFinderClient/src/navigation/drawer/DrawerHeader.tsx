import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "./Drawer";
import { SimpleLineIcons } from "@expo/vector-icons";
import TopViewCurve from "../../constants/TopViewCurve";
import { theme } from "../../constants/theme";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/native";
import { Context } from "../../contexts/AuthContext";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const DRAWER_HEIGHT = 50;

const DrawerHeader = () => {
  const navigation = useNavigation();
  const { state } = useContext(Context)!;
  return (
    <View style={styles.headerContainer}>
      <View style={[styles.headerNavigationContainer]}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
        >
          <View style={styles.headerNavigation}>
            <SimpleLineIcons name="menu" size={20} color="#a3a19b" />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.header}>
          <Text style={styles.headerText}>{state.headerText}</Text>
        </View>
        <AntDesign name="infocirlceo" color="#a3a19b" size={26} />
      </View>
      <View style={[styles.curve]}>
        <TopViewCurve
          width={width}
          height={30}
          color={theme.colors.white2}
        ></TopViewCurve>
      </View>
      <View style={styles.headerContent}></View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: DRAWER_HEIGHT,
    backgroundColor: theme.colors.white2,
  },
  headerNavigationContainer: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: theme.sizes.base * 2,
    // backgroundColor: "blue",
  },
  header: {},
  headerText: { fontSize: 15, fontWeight: "bold" },

  headerNavigation: {
    padding: 10,
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },

  curve: {
    position: "absolute",
    top: DRAWER_HEIGHT,
    zIndex: 100,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
