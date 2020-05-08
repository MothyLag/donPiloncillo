import styled from "styled-components";

export const SelectStd = styled.select`
  width: 108%;
  height: 4em;
  border-radius: 15px;
  color: white;
  border: 1px solid white;
  outline: none;
  transition: all .4s;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 20px;
  background-color: black;
  cursor: pointer;
  appearance:none;
  padding: 5px;
  :hover {
    transform: scale(1.1);
  }
  :selected {
    background: #EE1D1D;  
  }
`;

export const OptionStd = styled.option`
  font-weight: bold;
  font-family: Roboto;
  border-radius: 25px;
  
  :hover {
    background: #EE1D1D;  
  }

`;
