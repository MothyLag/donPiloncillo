import React from "react";
import styled from "styled-components";
import { CuteButton } from "../../components/cutebutton/cutebutton";
import { NewLogin } from "../../components/newLogin/newLogin";

export default () => {
	const FlexibleCardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const SignUpWrapper = styled.div`
    display: flex;
    width: 30%;

    height: 80%;
    justify-content: center;
    align-items: center;
  `;
	
  return(
  	<FlexibleCardWrapper>
  		<SignUpWrapper>
  			<h2>hola</h2>
  			<NewLogin/>
  		</SignUpWrapper>
  	</FlexibleCardWrapper>
  );
};