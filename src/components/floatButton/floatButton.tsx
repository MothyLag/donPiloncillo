import React from "react";
import { FloatWrapper } from "./floatButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFloatButtonProps } from "./floatButton.types";
export const FloatButton = (props: IFloatButtonProps) => {
  const { icon, backgroundColor, color, width, clickHandler } = props;
  console.log(props);
  return (
    <FloatWrapper
      onClick={clickHandler}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </FloatWrapper>
  );
};
