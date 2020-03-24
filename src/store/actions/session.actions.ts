import { ISessionState } from "../../utils/state.type";

export const logOut = (state: ISessionState) => {
  return {
    ...state,
    logged: false
  } as ISessionState;
};
