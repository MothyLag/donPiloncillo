import React from "react";
import { ICuteButtonProps } from "./cuteburron.types";
import { ButtonCute, Icono } from "./cutebutton.styles";

export const CuteButton = (props: ICuteButtonProps) => {
  const { text, icono = "none" } = props;
  return (
    <>
      {icono !== "none" ? (
        <ButtonCute>
          <Icono src={icono} />
          {text}
        </ButtonCute>
      ) : (
        <ButtonCute>{text}</ButtonCute>
      )}
    </>
  );
};
