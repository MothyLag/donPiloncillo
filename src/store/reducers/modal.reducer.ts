import { IModalState, IModalActions } from "../../utils/state.type";
import { OPEN_MODAL, CLOSE_MODAL } from "../../utils/state.actions";
import { openModal, closeModal } from "../actions/modal.actions";

const initialState = { open: false } as IModalState;
export const modalReducer = (state = initialState, action: IModalActions) => {
  switch (action.type) {
    case OPEN_MODAL:
      return openModal(state);
    case CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
};
