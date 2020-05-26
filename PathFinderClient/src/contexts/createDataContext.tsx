import React, { useReducer } from "react";
import {
  IAuthContext,
  AuthState,
  AuthActions,
  IAuthContextInit,
  IAuthContextMethods,
} from "./IAuthContext";

const createDataContext = (
  reducer: (state: AuthState, action: AuthActions) => AuthState,
  actions: IAuthContext,
  initialState: AuthState
) => {
  const Context = React.createContext<IAuthContextInit>({
    state: initialState,
    tryLocalSignin: null,
    signin: null,
    signup: null,
    signout: null,
  });

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = Object.getOwnPropertyNames(actions).reduce(
      (acc, item) => {
        acc[item] = actions[item](dispatch);
        return acc;
      },
      {} as IAuthContextMethods
    );
    // const boundActions2 = {
    //   signin: ({email,password})=>new Promise<void>((resolve, reject) => {}),
    //   signup: actions.signup(dispatch),
    //   tryLocalSignin: actions.tryLocalSignin(dispatch),
    //   signout: actions.signout(dispatch),
    // };
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export default createDataContext;
