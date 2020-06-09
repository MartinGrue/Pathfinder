import createDataContext from "./createDataContext";
import agent from "../app/api/agent";
import { AsyncStorage } from "react-native";
import NavigationService from "../utils/NavigationService";
import { AuthState, AuthActions } from "./IAuthContext";
const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup" || "signin":
      return { ...state, token: action.payload };
    case "signout":
      //implement signOut reducer
      console.log("signout");
    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      dispatch({ type: "add_error", payload: "An Error was found" });
      const token = await agent.User.signup({ email, password });
      const stringToken = JSON.stringify(token);
      await AsyncStorage.setItem("token", stringToken);
      dispatch({ type: "signup", payload: stringToken });
      const value = await AsyncStorage.getItem("token");
    } catch (error) {
      dispatch({ type: "add_error", payload: "An Error was found" });
    }
  };
};
const tryLocalSignin = (dispatch: React.Dispatch<AuthActions>) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      NavigationService.navigate("TrackList");
    } else {
      NavigationService.navigate("SignUp");
    }
  };
};
const signin = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      const token = await agent.User.signin({ email, password });
      await AsyncStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: "signin", payload: token });
      NavigationService.navigate("TrackList");
      const value = await AsyncStorage.getItem("token");
    } catch (error) {}
  };
};
const signout = (dispatch: React.Dispatch<AuthActions>) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch({ type: "signout" });
      NavigationService.navigate("SignUp");
    } catch (error) {}
  };
};
export const { Provider, Context, Consumer } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignin, signout },
  { token: null, errorMessage: "" }
);
