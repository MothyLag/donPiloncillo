import React from "react";
import { InputStd, SelectStd, OptionStd } from "./inptStd.styles";
import { IInputProps } from "./input.types";

export const Input = (props: IInputProps) => {
  const {
    id,
    placeholder,
    type = "text",
    dataSelect = [],
    value,
    onChange,
    onBlur,
  } = props;
  switch (type) {
    case "select":
      return (
        <SelectStd
          id={id}
          name={id}
          defaultValue={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
          <OptionStd selected>{placeholder}</OptionStd>
          {dataSelect.map((option) => {
            return <OptionStd value={option.value}>{option.text}</OptionStd>;
          })}
        </SelectStd>
      );
    case "text":
    default:
      return (
        <InputStd
          id={id}
          name={id}
          onChange={() => null}
          onChangeCapture={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
          placeholder={placeholder}
        ></InputStd>
      );
  }
};
