import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../constants/theme";

export default () => {
  return (
    <View>
      <View style={{ height: 400, backgroundColor: theme.colors.white }}>
        <Text style={{ textAlign: "center" }}>Options Options Options</Text>
      </View>
    </View>
  );
};
