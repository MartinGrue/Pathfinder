import createDataContext from "./createDataContext";
import agent from "../app/api/agent";
import { AsyncStorage } from "react-native";
import { AuthState, AuthActions } from "./IAuthContext";
const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { ...state, token: action.payload };
    case "signin":
      return { ...state, token: action.payload };
    case "signout":
      return state;
    case "setloading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
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
    dispatch({ type: "setloading", payload: true });

    const token = await AsyncStorage.getItem("token");
    if (token) {
      console.log("token found local");
      dispatch({ type: "signin", payload: token });
      dispatch({ type: "setloading", payload: false });
      return true;
    } else {
      dispatch({ type: "setloading", payload: false });
      return false;
    }
  };
};
const signin = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      const token = await agent.User.signin({ email, password });
      await AsyncStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: "signin", payload: token });
      const value = await AsyncStorage.getItem("token");
    } catch (error) {}
  };
};
const signout = (dispatch: React.Dispatch<AuthActions>) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch({ type: "signout" });
    } catch (error) {}
  };
};

export const { Provider, Context, Consumer } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignin, signout },
  { token: null, errorMessage: "", isLoading: false }
);
