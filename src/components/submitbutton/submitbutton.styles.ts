import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  height: 2em;
  background: #ffffff;
  color: #000000;
  font-weight: bold;
  border-color: transparent;
  font-size: 25px;
  border-color: #000000;
  border-radius: 8px;
  transition: 0.4s;
  font-family: Roboto;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background: #000000;
    color: #ffffff;
  }
`;

export const Icono = styled.img`
  hight: 18px;
  width: 18px;
  transition: all 0.4s;
  :hover {
    hight: 25px;
    width: 25px;
  }
`;
