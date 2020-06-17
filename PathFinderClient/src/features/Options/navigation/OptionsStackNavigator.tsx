import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../../navigation/drawer/Drawer";
import StackHeader from "../../../navigation/stack/StackHeader";
import SelectOptions from "../screens/SelectOptions";


export type CreateNewPathStackParamList = {
  SelectOptions: undefined;
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
          name="SelectOptions"
          component={SelectOptions}
          options={{
            header: (props) => <StackHeader {...{ navigation }} />,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
