import React from "react";
import {
  ModalDimmer,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalWrapper,
} from "./modal.styles";
import { IModalProps } from "./modal.types";
import { ButtonForm } from "../buttonForm/buttonForm";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../utils/state.type";
import { CLOSE_MODAL } from "../../utils/state.actions";

export const Modal = (props: IModalProps) => {
  const { title, children } = props;
  const modalOpen = useSelector<IAppState>(
    (state) => state.modal.open
  ) as boolean;
  const dispatch = useDispatch();
  return (
    <ModalDimmer open={modalOpen}>
      <ModalWrapper>
        <ModalHeader>
          <h3 style={{ marginLeft: "5px" }}>{title}</h3>
        </ModalHeader>
        <ModalBody>
          <div style={{ margin: "5px" }}>{children}</div>
        </ModalBody>
        <ModalFooter>
          <div style={{ margin: "5px", display: "flex" }}>
            <ButtonForm
              text="Cerrar"
              width="100px"
              height="1.5em"
              clickHandler={() => dispatch({ type: CLOSE_MODAL })}
            />
          </div>
        </ModalFooter>
      </ModalWrapper>
    </ModalDimmer>
  );
};
