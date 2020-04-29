import styled from "styled-components";

export const ButtonCute = styled.button`
  justify-content: center;
  background: transparent;
  color: #3a3a3a;
  border-radius: 3px;
  outline: none;
  border-color: transparent;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.1);
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
