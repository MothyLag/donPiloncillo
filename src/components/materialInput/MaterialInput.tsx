import React, { useState } from "react";
import { IMaterialInputProps } from "./materialInput.types";
import styled from "styled-components";

export default (props: IMaterialInputProps) => {
  const [accentWidth, setAccentWidth] = useState(1);
  const [focused, setFocused] = useState(false);
  const [labelProperties, setLabelPropperties] = useState({
    translate: 1,
    size: 10
  });
  const {
    width = "100%",
    label = "",
    labelColor = "black",
    color = "black"
  } = props;
  const MaterialInputStyled = styled.input`
    width: ${width};
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid #a0a0a0;
    color: ${color};
  `;

  const MaterialLabel = styled.label`
    position: absolute;
    transform: translateY(${labelProperties.translate});
    color: ${labelColor};
    pointer-events: none;
    transition: all 0.5s;
  `;

  const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    width: ${width};
  `;

  return (
    <Wrapper>
      <MaterialLabel>{label}</MaterialLabel>
      <MaterialInputStyled />
    </Wrapper>
  );
};
