import React from "react";
import { ICuteButtonProps } from "./cuteburron.types";
import { ButtonCute, Icono } from "./cutebutton.styles";

export const CuteButton = (props: ICuteButtonProps) => {
  const { text, icono = "none", clickHandler } = props;
  return (
    <>
      {icono !== "none" ? (
        <ButtonCute onClick={clickHandler}>
          <Icono src={icono} />
          {text}
        </ButtonCute>
      ) : (
        <ButtonCute onClick={clickHandler}>{text}</ButtonCute>
      )}
    </>
  );
};
