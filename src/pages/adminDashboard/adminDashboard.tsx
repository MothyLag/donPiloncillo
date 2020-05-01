import React, { useEffect } from "react";
import { AdminWrapper } from "./adminDashboard.styles";
import { useSelector } from "react-redux";
import { IAppState } from "../../utils/state.type";

import { useHistory } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import { CuteButton } from "../../components/cutebutton/cutebutton";
import {
  BoxContWrapper,
  CenterBox,
} from "../../components/boxContent/boxContent.styles";
import { CustomTable } from "../../components/customTable/customTable";
import { CustomTabs } from "../../components/customTabs/customTabs";

export const AdminDashboard = () => {
  const logged = useSelector<IAppState>((state) => state.session.logged);

  const history = useHistory();

  useEffect(() => {
    if (!logged) {
      //history.replace("/");
    }
  }, [logged, history]);

  return (
    <AdminWrapper>
      <Navbar>
        <CuteButton text="Catalogos" />
        <CuteButton text="Proveedores" />
        <CuteButton text="Usuarios" />
      </Navbar>
      <CenterBox>
        <BoxContWrapper>
          <CustomTabs
            tabs={["1", "2"]}
            content={[<p>content1</p>, <p>content2</p>]}
          ></CustomTabs>
          {/* <CustomTable
            headers={["uno", "dos"]}
            data={[{ uno: "uno", dos: "dos" }]}
          ></CustomTable> */}
        </BoxContWrapper>
      </CenterBox>
    </AdminWrapper>
  );
};
