import React from "react";
import { FloatWrapper } from "./floatButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFloatButtonProps } from "./floatButton.types";
export const FloatButton = (props: IFloatButtonProps) => {
  const {
    icon,
    backgroundColor,
    color,
    width,
    clickHandler,
    position = "5px",
  } = props;
  return (
    <FloatWrapper
      onClick={clickHandler}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      position={position}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </FloatWrapper>
  );
};
