import { IModalState } from "../../utils/state.type";

export const openModal = (state: IModalState) => {
  return { ...state, open: true } as IModalState;
};

export const closeModal = (state: IModalState) => {
  return { ...state, open: false } as IModalState;
};
