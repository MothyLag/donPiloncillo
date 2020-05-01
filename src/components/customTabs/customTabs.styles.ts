import styled from "styled-components";
import { ITabContentProps } from "./customTabs.types";

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TabContent = styled.div`
  width: 100%;
  display: ${(props: ITabContentProps) => (props.visible ? "flex" : "none")};
  justify-content: center;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

export const Tab = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid black;
  text-align: center;
  font-family: "Roboto";
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
  :hover {
    transform: scale(1.03);
    color: white;
    background-color: black;
  }
`;
