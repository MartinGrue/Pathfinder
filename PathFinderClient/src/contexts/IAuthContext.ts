export type AuthState = {
  token: string | null;
  errorMessage: string | null;
};
export type AuthActions =
  | {
      type: "signup";
      payload: string;
    }
  | {
      type: "signin";
      payload: string;
    }
  | {
      type: "signout";
    }
  | {
      type: "add_error";
      payload: string;
    };

export interface IAuthContext {
  signin: (
    dispatch: React.Dispatch<AuthActions>
  ) => ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signup: (
    dispatch: React.Dispatch<AuthActions>
  ) => ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  tryLocalSignin: (
    dispatch: React.Dispatch<AuthActions>
  ) => () => Promise<boolean>;
  signout: (dispatch: React.Dispatch<AuthActions>) => () => Promise<void>;
  [key: string]: any;
}
export interface IAuthContextMethods {
  tryLocalSignin: () => Promise<boolean>;
  signin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signup: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signout: () => Promise<void>;
  [key: string]: any;
}
export interface IAuthContextState {
  state: AuthState;
}
export interface IAuthContextInit
  extends IAuthContextMethods,
    IAuthContextState {}
