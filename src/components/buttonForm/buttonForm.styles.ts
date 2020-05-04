import styled from "styled-components";
import { IButtonFormWrapperProps } from "./buttonForm.types";

export const ButtonFormWrapper = styled.div`
  width: ${(props: IButtonFormWrapperProps) =>
    props.width ? props.width : "100px"};
  height: ${(props: IButtonFormWrapperProps) =>
    props.height ? props.height : "100px"};
  background-color: ${(props: IButtonFormWrapperProps) =>
    props.hovered ? "black" : "white"};
  color: ${(props: IButtonFormWrapperProps) =>
    props.hovered ? "white" : "black"};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 3px;
  transition: all ease 0.3s;
  cursor: pointer;
`;
