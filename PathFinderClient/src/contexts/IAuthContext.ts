export type AuthState = {
  token: string | null;
  errorMessage: string | null;
  isLoading: boolean | null;
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
    }
  | {
      type: "clear_error";
    }
  | {
      type: "setloading";
      payload: boolean;
    };

export interface IAuthContext {
  signup: (
    dispatch: React.Dispatch<AuthActions>
  ) => ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signin: (
    dispatch: React.Dispatch<AuthActions>
  ) => ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signout: (dispatch: React.Dispatch<AuthActions>) => () => Promise<void>;
  clearError: (dispatch: React.Dispatch<AuthActions>) => () => void;
  tryLocalSignin: (
    dispatch: React.Dispatch<AuthActions>
  ) => () => Promise<boolean>;

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
  clearError: () => void;
}
export interface IAuthContextState {
  state: AuthState;
}
export interface IAuthContextInit
  extends IAuthContextMethods,
    IAuthContextState {}
