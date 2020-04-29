import React, { useEffect } from "react";
import { AdminWrapper } from "./adminDashboard.styles";
import { useSelector } from "react-redux";
import { IAppState } from "../../utils/state.type";

import { useHistory } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import { CuteButton } from "../../components/cutebutton/cutebutton";
import { BoxContWrapper } from "../../components/boxContent/boxContent.styles";

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
        <CuteButton text="Texto Largo 1" />
        <CuteButton text="Texto Largo 2" />
        <CuteButton text="Texto Largo 3" />
      </Navbar>

      <BoxContWrapper>asd</BoxContWrapper>
    </AdminWrapper>
  );
};
