import styled from "styled-components";

export const ModalDimmer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90000;
  display: ${(props: { open: boolean }) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.form`
  display: grid;
  grid-template-rows: 2em calc(500px - 4em) 2em;
  background-color: white;
  border-radius: 5px;
  width: 600px;
  height: 500px;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
