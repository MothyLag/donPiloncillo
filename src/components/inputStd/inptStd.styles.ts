import styled from "styled-components";

export const InputStd = styled.input`
  width: 100%;
  height: 2em;
  border-radius: 3px;
  border: 1px solid grey;
  padding: 10px;
  outline: none;
  transition: all 0.5s;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 20px;
  :focus {
    border: 1px solid black;
    /* box-shadow: 0px 0px 1px 1px blue; */
  }
`;

export const SelectStd = styled.select`
  width: 108%;
  height: 4em;
  border-radius: 3px;
  border: 1px solid grey;
  outline: none;
  transition: all 0.5s;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
`;

export const OptionStd = styled.option``;
