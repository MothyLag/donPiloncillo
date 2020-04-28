import { ISessionState } from "../../utils/state.type";

export const logOut = (state: ISessionState) => {
  return {
    ...state,
    logged: false,
  } as ISessionState;
};

export const logIn = (state: ISessionState) => {
  return {
    ...state,
    logged: true,
  } as ISessionState;
};
