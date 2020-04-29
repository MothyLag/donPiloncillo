import styled from "styled-components";

export const ButtonCute = styled.button`
  justify-content: center;
  background: transparent;

  color: #FFFFFF;
  border-radius: 3px;
  outline: none;
  border-color: transparent;
  font-size: 18px;
  border: 2px solid #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.1);
    background: #FFFFFF;
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
