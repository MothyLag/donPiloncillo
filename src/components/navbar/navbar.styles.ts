import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 2.5em;
  padding: 0px;
  margin: 0px;
  z-index: 100;
  color: white;
`;

export const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: center;
`;

export const Blurred = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2.5em;
  padding: 0px;
  margin: 0px;
  z-index: 99;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.85);
`;
