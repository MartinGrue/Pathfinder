export type AuthState = {
  token: string | null;
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
  ) => () => Promise<void>;
  signout: (dispatch: React.Dispatch<AuthActions>) => () => Promise<void>;
}
export interface IAuthContextMethods {
  tryLocalSignin: () => Promise<void>;
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
}
export interface IAuthContextState {
  state: AuthState;
}
export interface IAuthContextInit
  extends IAuthContextMethods,
    IAuthContextState {}
