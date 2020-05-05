import { IDataState, IDataChangePayload } from "../../utils/state.type";

export const changeData = (state: IDataState, payload: IDataChangePayload) => {
  return {
    ...state,
    data: payload.newData,
  } as IDataState;
};
