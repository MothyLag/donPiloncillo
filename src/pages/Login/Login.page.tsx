import React from "react";
import FlexibleCard from "../../components/flexibleCards/FlexibleCard";
import styled from "styled-components";
import MaterialInput from "../../components/materialInput/MaterialInput";

export default () => {
  const FlexibleCardWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const LoginWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;
  return (
    <FlexibleCardWrapper>
      <FlexibleCard
        backgroundColor="#5B7185"
        color="white"
        width="50%"
        rounded="8px"
        paddingVertical="50px"
        paddingHorizontal="20px"
      >
        <LoginWrapper>
          <MaterialInput
            color="white"
            labelColor="#CDCDCD"
            label="usuario"
            width="90%"
          />
        </LoginWrapper>
      </FlexibleCard>
    </FlexibleCardWrapper>
  );
};
