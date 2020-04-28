import { ISessionState, ISessionActions } from "../../utils/state.type";
import { LOG_OUT, LOG_IN } from "../../utils/state.actions";
import { logOut, logIn } from "../actions/session.actions";

const initialState = {
  logged: false,
};

const sessionReducer = (
  state: ISessionState = initialState,
  action: ISessionActions
) => {
  switch (action.type) {
    case LOG_OUT:
      return logOut(state);

    case LOG_IN:
      return logIn(state);

    default:
      return state;
  }
};
export default sessionReducer;
