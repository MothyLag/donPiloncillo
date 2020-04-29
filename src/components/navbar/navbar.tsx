import React from "react";
import { INavbarProps } from "./navbar.types";
import { Wrapper, Blurred, NavbarContent } from "./navbar.styles";

export const Navbar = (props: INavbarProps) => {
  const { children } = props;
  return (
    <>
      <Blurred />
      <Wrapper>
        <NavbarContent>{children}</NavbarContent>
      </Wrapper>
    </>
  );
};
