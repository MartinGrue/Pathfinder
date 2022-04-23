import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import DrawerScreen from "./DrawerScreen";

import FindYoutPathStackNavigatior from "../../features///FindYourPath/navigation/FindYoutPathStackNavigatior";
import Typography from "../../components/Typography";
import { Avatar } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { SvgXml } from "react-native-svg";
import { emergencyIcon, mountainIcon, saveIcon, starIcon } from "./DrawerIcons";

export type DrawerParamList = {
  FindYoutPathStackNavigatior: undefined;
  CreateNewPath: undefined;
  Options: undefined;
};

interface DrawerComponentProps {
  props: DrawerContentComponentProps;
}

const DrawerContent = ({ props }: DrawerComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar
          size="large"
          rounded
          source={require("../../../assets/hqdefault.jpg")}
          containerStyle={{ margin: 20 }}
          avatarStyle={{ borderWidth: 2, borderColor: "white" }}
          title={"Sam Walters"}
        />
        <View style={{}}>
          <Typography white weight="bold">
            Sam Walters
          </Typography>
          <Typography gray weight="100" style={{ paddingTop: 5 }}>
            View Profile
          </Typography>
        </View>
      </View>

      <DrawerItem
        label="FindYourPath"
        labelStyle={styles.drawerLabel}
        onPress={() => props.navigation.navigate("FindYoutPathStackNavigatior")}
        icon={() => (
          <SvgXml
            xml={starIcon}
            width={26}
            height={26}
            fill={theme.colors.white2}
          />
        )}
      />
      <DrawerItem
        label="Mountain Safety"
        labelStyle={styles.drawerLabel}
        onPress={() => {}}
        icon={() => (
          <SvgXml
            xml={mountainIcon}
            width={26}
            height={26}
            fill={theme.colors.white2}
          />
        )}
      />
      <DrawerItem
        label="Emergency Contacts"
        labelStyle={styles.drawerLabel}
        onPress={() => props.navigation.navigate("Options")}
        icon={() => (
          <SvgXml
            xml={emergencyIcon}
            width={26}
            height={26}
            fill={theme.colors.white2}
          />
        )}
      />
      <DrawerItem
        label="Saved Paths"
        labelStyle={styles.drawerLabel}
        onPress={() => {}}
        icon={() => (
          <SvgXml
            xml={saveIcon}
            width={26}
            height={26}
            fill={theme.colors.white2}
          />
        )}
      ></DrawerItem>
      <DrawerItem
        label=""
        onPress={() => {}}
        style={{
          width: "100%",
          height: 10,
          // marginTop: 10,
          transform: [{ translateY: 5 }],
          borderTopWidth: 0.75,
          borderTopColor: theme.colors.white2,
          // backgroundColor: "blue",
        }}
      ></DrawerItem>
      <DrawerItem
        label="Options"
        labelStyle={styles.drawerLabel}
        onPress={() => props.navigation.navigate("Options")}
        icon={() => (
          <AntDesign name="message1" color={theme.colors.white2} size={26} />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default () => {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  const screenOptions: DrawerNavigationOptions = {
    header: () => <></>,
    drawerType: "slide",
    swipeEdgeWidth: 80,
    overlayColor: "transparent",
    drawerStyle: styles.drawerStyles,
    sceneContainerStyle: {
      backgroundColor: theme.colors.primary,
    },
  };
  return (
    <>
      {/* Yes this is necessary, to make the borders animate and at the same time get safeareaView without flickering */}
      <SafeAreaView
        style={{ flex: 0, backgroundColor: theme.colors.white2 }}
        edges={["top"]}
      ></SafeAreaView>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.primary }}
        edges={["bottom"]}
      >
        <Drawer.Navigator
          initialRouteName="FindYoutPathStackNavigatior"
          screenOptions={screenOptions}
          drawerContent={(props) => (
            <DrawerContent {...{ props }}></DrawerContent>
          )}
        >
          <Drawer.Screen name="FindYoutPathStackNavigatior">
            {() => (
              <DrawerScreen>
                <FindYoutPathStackNavigatior />
              </DrawerScreen>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  drawerStyles: {
    flex: 1,
    width: "70%",
    // backgroundColor: "#2A4337",
    borderWidth: 2,
    borderColor: "#2A4337",
  },
  contentContainerStyle: { flex: 1, backgroundColor: theme.colors.primary },
  drawerLabel: { color: theme.colors.gray2, marginLeft: -16 },
});
