import { ISessionState, ISessionActions } from "../../utils/state.type";
import { LOG_OUT } from "../../utils/state.actions";
import { logOut } from "../actions/session.actions";

const initialState = {
  logged: false
};

const sessionReducer = (
  state: ISessionState = initialState,
  action: ISessionActions
) => {
  switch (action.type) {
    case LOG_OUT:
      return logOut(state);

    default:
      return state;
  }
};
export default sessionReducer;
