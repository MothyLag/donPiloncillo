import React from "react";
import { ISubmitButtonProps } from "./submitbutton.types";
import { SubmitButton, Icono } from "./submitbutton.styles";

export const ButtonSubmit = (props: ISubmitButtonProps) => {
  const { text, icono = "none" } = props;
  return (
    <>
      {icono !== "none" ? (
        <SubmitButton type="submit">
          <Icono src={icono} /> {text}{" "}
        </SubmitButton>
      ) : (
        <SubmitButton type="submit">{text}</SubmitButton>
      )}
    </>
  );
};
