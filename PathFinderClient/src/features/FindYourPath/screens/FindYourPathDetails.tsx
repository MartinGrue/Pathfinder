import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ISavedPath } from "../../../components/PathCard";

// type ProfileScreenNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<TabParamList>,
//   StackNavigationProp<StackParamList, "FindYourPathButtomTabNavigator">
// >;

// type TabNavigatorRouteProp = RouteProp<TabParamList, "DetailsStack2">;

// interface Props2 {
//   navigation: BottomTabNavigationProp<TabParamList, keyof TabParamList>;
//   route: TabNavigatorRouteProp;
// }

interface FindYourPathDetailsProps {
  savedPath: ISavedPath;
}
export default ({ savedPath }: FindYourPathDetailsProps) => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "#FDFDFB",
    //   }}
    // >
    //   <Text style={{ textAlign: "center" }}>{savedPath.name}</Text>
    // </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((item) => (
          <View
            key={item}
            style={{
              paddingVertical: 100,
              paddingHorizontal: 100,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 256
              )},${Math.floor(Math.random() * 256)},${Math.floor(
                Math.random() * 256
              )})`,
            }}
          >
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
