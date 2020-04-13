import React from "react";
import { IFlexibleCardProps } from "./flexibleCard.types";
import styled from "styled-components";

export default (props: IFlexibleCardProps) => {
  const {
    children,
    backgroundColor,
    color,
    width,
    rounded = "0px",
    paddingHorizontal = "16px",
    paddingVertical = "16px"
  } = props;
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${color};
    margin-top: 20px;
    width: ${width};
    padding: ${paddingVertical} ${paddingHorizontal};
    border-radius: ${rounded};
  `;
  return <Wrapper>{children}</Wrapper>;
};
