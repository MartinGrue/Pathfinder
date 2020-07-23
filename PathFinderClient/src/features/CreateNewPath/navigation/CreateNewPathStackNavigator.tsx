import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import CreateNewPath from "../screens/CreateNewPath";
import SaveNewPath from "../screens/SaveNewPath";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";

export type CreateNewPathStackParamList = {
  CreateNewPath: undefined;
  SaveNewPath: undefined;
};
const Stack = createStackNavigator<CreateNewPathStackParamList>();
interface CreateNewPathStackNavigatorProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation }: CreateNewPathStackNavigatorProps) => {
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
            header: () => <DrawerHeader {...{ navigation }}></DrawerHeader>,
          }}
        />
        <Stack.Screen name="SaveNewPath" component={SaveNewPath} />
      </Stack.Navigator>
    </View>
  );
};
