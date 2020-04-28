import React from "react";
import styled from "styled-components";
import { NewLogin } from "../../components/newLogin/newLogin";

export default () => {
  const NewLogginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("imgs/donPiloncillo2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  const FlexibleCardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const SignUpWrapper = styled.div`
    display: flex;
    width: 100%;

    height: 80%;
    justify-content: center;
    align-items: center;
  `;

  return (
    <NewLogginWrapper>
      <FlexibleCardWrapper>
        <SignUpWrapper>
          <NewLogin />
        </SignUpWrapper>
      </FlexibleCardWrapper>
    </NewLogginWrapper>
  );
};
