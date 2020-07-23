import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import SelectOptions from "../screens/SelectOptions";
import DrawerHeader from "../../../navigation/drawer/DrawerHeader";


export type CreateNewPathStackParamList = {
  SelectOptions: undefined;
};
const Stack = createStackNavigator<CreateNewPathStackParamList>();
interface OptionsStackNavigatorProps {
  navigation: DrawerNavigationProp<DrawerParamList, keyof DrawerParamList>;
}
export default ({ navigation }: OptionsStackNavigatorProps) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="SelectOptions"
          component={SelectOptions}
          options={{
            header: () => <DrawerHeader {...{ navigation }}></DrawerHeader>,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
