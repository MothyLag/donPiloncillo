import React from "react";
import { INavbarProps } from "./navbar.types";
import { Wrapper, Blurred, NavbarContent } from "./navbar.styles";
import { CuteButton } from "../cutebutton/cutebutton";

export const Navbar = (props: INavbarProps) => {
  return (
    <>
      <Blurred />
      <Wrapper>
        <NavbarContent>
          <CuteButton icono="img/icons/bagicons/bag-black.png" />
          <CuteButton text="App" />
        </NavbarContent>
      </Wrapper>
    </>
  );
};
