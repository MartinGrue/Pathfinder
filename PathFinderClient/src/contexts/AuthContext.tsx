import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState, AuthActions } from "./IAuthContext";

const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signup":
      return { ...state, token: action.payload };
    case "signin":
      return { ...state, token: action.payload };
    case "signout":
      return { ...state, token: null };
    case "setloading":
      return { ...state, isLoading: action.payload };
    case "setHeaderText":
      return { ...state, headerText: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      // const token = await agent.User.signup({ email, password });
      const token = "test";
      const stringToken = JSON.stringify(token);
      await AsyncStorage.setItem("token", stringToken);
      dispatch({ type: "signup", payload: stringToken });
    } catch (error) {
      dispatch({ type: "add_error", payload: "Error in sign up" });
    }
  };
};
const tryLocalSignin = (dispatch: React.Dispatch<AuthActions>) => {
  return async () => {
    dispatch({ type: "setloading", payload: true });

    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      dispatch({ type: "setloading", payload: false });
      return true;
    } else {
      dispatch({ type: "add_error", payload: "Error in trylocalsignup" });
      dispatch({ type: "setloading", payload: false });
      return false;
    }
  };
};
const signin = (dispatch: React.Dispatch<AuthActions>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      // const token = await agent.User.signin({ email, password });
      const token = "test";
      await AsyncStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: "signin", payload: token });
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
const clearError = (dispatch: React.Dispatch<AuthActions>) => {
  return () => dispatch({ type: "clear_error" });
};
const setHeaderText =
  (dispatch: React.Dispatch<AuthActions>) => (text: string) =>
    dispatch({ type: "setHeaderText", payload: text });

export const { Provider, Context, Consumer } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignin, signout, clearError, setHeaderText },
  { token: null, errorMessage: "", isLoading: false, headerText: null }
);
