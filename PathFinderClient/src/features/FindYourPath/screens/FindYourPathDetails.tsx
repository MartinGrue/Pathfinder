import React from "react";
import { Text, View } from "react-native";
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
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FDFDFB",
      }}
    >
      <Text style={{ textAlign: "center" }}>{savedPath.name}</Text>
    </View>
  );
};
