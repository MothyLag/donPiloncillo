import React, { useState } from "react";
import { ButtonFormWrapper } from "./buttonForm.styles";
import { IButtonFormProps } from "./buttonForm.types";

export const ButtonForm = (props: IButtonFormProps) => {
  const { height, width, clickHandler, text } = props;
  const [hovered, setHovered] = useState(false);
  const styleAttrs = { width, height, hovered };
  return (
    <ButtonFormWrapper
      onClick={clickHandler}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...styleAttrs}
    >
      {text}
    </ButtonFormWrapper>
  );
};
