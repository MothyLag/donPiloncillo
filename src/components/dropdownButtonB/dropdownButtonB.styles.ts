import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  div {
    visibility: hidden;
    position: absolute;
    min-width: 100%;
    opacity: 0;
    transition: 0.3s;
  }
  :hover div {
    height: 500px;
    visibility: visible;
    overflow-y: auto;
    opacity: 1;
  }
`;

export const PrincipalButton = styled.button`
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
  }
`;

export const SecundaryButton = styled.button`
  width: 100%;
  margin-top: 10px;
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
