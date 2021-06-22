import { NavigationProp } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { NavigationContainerRef } from "@react-navigation/native";
let _navigator: NavigationContainerRef | null;
const setTopLevelNavigator = (navigatorRef: NavigationContainerRef | null) => {
  _navigator = navigatorRef;
};
const navigate = (name: string, params?: NavigationProp<any>) => {
  _navigator!.dispatch(
    CommonActions.navigate({
      name,
      params,
    })
  );
};
export default {
  navigate,
  setTopLevelNavigator,
};
