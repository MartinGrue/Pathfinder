import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FDFDFB"
      }}
    >
      <Text style={{ textAlign: "center" }}>Photos Photos Photos</Text>
    </SafeAreaView>
  );
};
