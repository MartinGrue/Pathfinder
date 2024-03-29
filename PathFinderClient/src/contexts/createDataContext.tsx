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
  const Context = React.createContext<IAuthContextInit | null>(null);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = Object.getOwnPropertyNames(actions).reduce(
      (acc, item) => {
        acc[item] = actions[item](dispatch);
        return acc;
      },
      {} as IAuthContextMethods
    );
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  const Consumer = Context.Consumer;

  return { Context, Provider, Consumer };
};

export default createDataContext;
