import styled from "styled-components";
import { IFloatButtonStyleProps } from "./floatButton.types";

export const FloatWrapper = styled.div`
  position: fixed;
  width: ${(props: IFloatButtonStyleProps) =>
    props.width ? props.width : "50px"};
  height: ${(props: IFloatButtonStyleProps) =>
    props.width ? props.width : "50px"};
  border-radius: 50%;
  background-color: ${(props: IFloatButtonStyleProps) => props.backgroundColor};
  bottom: ${(props: IFloatButtonStyleProps) => props.position};
  right: 5px;
  color: ${(props: IFloatButtonStyleProps) => props.color};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
