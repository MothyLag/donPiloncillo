import { combineReducers } from "redux";
import sessionReducer from "./session.reducer";
import { IAppState, IAppActions } from "../../utils/state.type";
import { Reducer } from "react";
import { modalReducer } from "./modal.reducer";
const store = combineReducers<Reducer<IAppState, IAppActions>>({
  session: sessionReducer,
  modal: modalReducer,
});

export default store;
