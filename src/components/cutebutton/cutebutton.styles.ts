import styled from "styled-components";

export const ButtonCute = styled.button`
  justify-content: center;
  background: transparent;

  color: #ffffff;
  border-radius: 3px;
  outline: none;
  border-color: transparent;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  font-weight: bold;
  :hover {
    transform: scale(1.1);
    background: #ffffff;
    color: #000000;
  }
`;

export const Icono = styled.img`
  height: 18px;
  width: 18px;
  transition: all 0.4s;
  :hover {
    height: 25px;
    width: 25px;
  }
`;
