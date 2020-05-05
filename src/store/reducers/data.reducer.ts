import { IDataState, IDataActions } from "../../utils/state.type";

const initialState = { data: "providers" } as IDataState;
export const dataReducer = (state = initialState, action: IDataActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
