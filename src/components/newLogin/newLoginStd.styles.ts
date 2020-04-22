import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  flex-direction: column;
  width: 100%;
  background: rgba(168, 168, 168, .7);
  padding: 25px;
  border-radius: 15px;
  transition: all 0.4s;
  :hover {
    transform: scale(1.01);
    background: rgba(0, 0, 0, .7);
    border-radius: 35px;
  }
`;
