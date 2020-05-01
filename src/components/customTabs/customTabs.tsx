import React, { useState } from "react";
import { TabsWrapper, Tab, BodyWrapper, TabContent } from "./customTabs.styles";
import { ICustomTabsProps } from "./customTabs.types";

export const CustomTabs = (props: ICustomTabsProps) => {
  const { content, tabs } = props;
  const [state, setState] = useState(content.map((item) => false));
  return (
    <BodyWrapper>
      <TabsWrapper>
        {tabs.map((tab, index) => (
          <Tab
            onClick={() => {
              const auxArr = state.map((item) => item);
              for (let value in auxArr) auxArr[value] = false;
              console.log(auxArr);
              auxArr[index] = true;
              console.log(auxArr);
              setState(auxArr);
            }}
          >
            {tab}
          </Tab>
        ))}
      </TabsWrapper>
      {content.map((item, index) => (
        <TabContent visible={state[index]}>{item}</TabContent>
      ))}
    </BodyWrapper>
  );
};
