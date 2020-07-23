import React, { useContext } from "react";

import { Text, Dimensions, View, Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import { Context as AuthContext } from "../../../contexts/AuthContext";
import { theme } from "../../../constants/theme";
import TopViewCurve from "../../../constants/TopViewCurve";

interface SelectOptionsProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}

export default ({ navigation }: SelectOptionsProps) => {
  const authContext = useContext(AuthContext);

  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
      }}
    >
      <TopViewCurve
        width={Dimensions.get("window").width}
        height={30}
        color={theme.colors.white2}
      ></TopViewCurve>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.white,
        }}
      >
        <Text style={{ textAlign: "center" }}>Options Options Options</Text>
        <View>
          <Animated.View
            style={{
              backgroundColor: "white",
              height: 50,
              marginHorizontal: 20,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 10,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                authContext &&
                  authContext.signout().then(() => {
                    navigation.navigate;
                  });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>sign Out</Text>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
