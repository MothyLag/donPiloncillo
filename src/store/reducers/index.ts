import { combineReducers } from "redux";
import sessionReducer from "./session.reducer";
import { IAppState, IAppActions } from "../../utils/state.type";
import { Reducer } from "react";
import { modalReducer } from "./modal.reducer";
import { dataReducer } from "./data.reducer";
const store = combineReducers<Reducer<IAppState, IAppActions>>({
  session: sessionReducer,
  modal: modalReducer,
  data: dataReducer,
});

export default store;
