import React from "react";
import { IFlexibleCardProps } from "./flexibleCard.types";

export default (props: IFlexibleCardProps) => {
  const { children } = props;
  return <div className="flexibleCard">{children}</div>;
};
