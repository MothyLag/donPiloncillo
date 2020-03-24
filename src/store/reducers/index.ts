import { combineReducers } from "redux";
import sessionReducer from "./session.reducer";
import { IAppState, IAppActions } from "../../utils/state.type";
import { Reducer } from "react";
const store = combineReducers<Reducer<IAppState, IAppActions>>({
  session: sessionReducer
});

export default store;
