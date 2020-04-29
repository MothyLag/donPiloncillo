import React, { useEffect } from "react";
import { AdminWrapper } from "./adminDashboard.styles";
import { useSelector } from "react-redux";
import { IAppState } from "../../utils/state.type";

import { useHistory } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import { CuteButton } from "../../components/cutebutton/cutebutton";

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
        <CuteButton text="cute1" />
        <CuteButton text="cute2" />
      </Navbar>
    </AdminWrapper>
  );
};
