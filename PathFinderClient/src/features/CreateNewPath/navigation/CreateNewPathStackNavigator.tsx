import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import StackHeader from "../../../navigation/stack/StackHeader";
import CreateNewPath from "../screens/CreateNewPath";
import SaveNewPath from "../screens/SaveNewPath";

export type CreateNewPathStackParamList = {
  CreateNewPath: undefined;
  SaveNewPath: undefined;
};
const Stack = createStackNavigator<CreateNewPathStackParamList>();
interface FindYoutPathStackNavigatiorProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation }: FindYoutPathStackNavigatiorProps) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="CreateNewPath"
          component={CreateNewPath}
          options={{
            header: (props) => <StackHeader {...{ navigation }} />,
          }}
        />
        <Stack.Screen name="SaveNewPath" component={SaveNewPath} />
      </Stack.Navigator>
    </View>
  );
};
