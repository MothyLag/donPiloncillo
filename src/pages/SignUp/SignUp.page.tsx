import React from "react";
import styled from "styled-components";
import { CuteButton } from "../../components/cutebutton/cutebutton";
import {FormSignUp} from "../../components/formSignUp/formSignUp";
import Background from '/public/imgs/donPiloncillo2.jpg';

export default () => {
	const FlexibleCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    backgroundImage: "url(" + Background + ")";
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
  			<FormSignUp/>
  		</SignUpWrapper>
  	</FlexibleCardWrapper>
  );
};