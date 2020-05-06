import { IDataState, IDataActions } from "../../utils/state.type";
import { CHANGE_DATA } from "../../utils/state.actions";
import { changeData } from "../actions/data.actions";

const initialState = { data: "hornillas" } as IDataState;
export const dataReducer = (state = initialState, action: IDataActions) => {
  switch (action.type) {
    case CHANGE_DATA:
      return changeData(state, action.payload);
    default:
      return state;
  }
};
