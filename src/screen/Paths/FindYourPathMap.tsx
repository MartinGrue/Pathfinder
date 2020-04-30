import React from "react";
import { Text, SafeAreaView } from "react-native";

interface Props {
  defaultprop: string;
}
const FindYourPathMap = ({ defaultprop }: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FDFDFB",
      }}
    >
      <Text style={{ textAlign: "center" }}>{defaultprop}</Text>
    </SafeAreaView>
  );
};

FindYourPathMap.defaultProps = {
  defaultprop: "world",
} as Partial<Props>;
export default FindYourPathMap;
