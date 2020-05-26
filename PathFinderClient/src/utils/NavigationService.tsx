import { NavigationActions, NavigationParams } from "react-navigation";
import { NavigationContainerRef } from "@react-navigation/native";
let _navigator: NavigationContainerRef | null;
const setTopLevelNavigator = (navigatorRef: NavigationContainerRef | null) => {
  _navigator = navigatorRef;
};
const navigate = (routeName: string, params?: NavigationParams) => {
  _navigator!.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
export default {
  navigate,
  setTopLevelNavigator,
};
