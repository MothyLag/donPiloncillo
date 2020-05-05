import React, { useEffect } from "react";
import { AdminWrapper } from "./adminDashboard.styles";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../utils/state.type";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import { CuteButton } from "../../components/cutebutton/cutebutton";
import {
  BoxContWrapper,
  CenterBox,
} from "../../components/boxContent/boxContent.styles";

import { FloatButton } from "../../components/floatButton/floatButton";
import { Modal } from "../../components/modal/modal";
import { AddRequisicion } from "../../components/addRequisicion/addRequisicion";
import { OPEN_MODAL } from "../../utils/state.actions";
import { AddProvider } from "../../components/addProvider/addProvider";
import { ProviderDB } from "../../database/providers/providers.pouch";

export const AdminDashboard = () => {
  const logged = useSelector<IAppState>((state) => state.session.logged);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector<IAppState>((state) => state.data.data);
  const providersDB = new ProviderDB();
  useEffect(() => {
    providersDB.getAllProviders().then((res) => console.log(res));
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
        <BoxContWrapper></BoxContWrapper>
        <FloatButton
          backgroundColor="#67676A"
          width="50px"
          icon={faPlus}
          color="white"
          clickHandler={() => dispatch({ type: OPEN_MODAL })}
        ></FloatButton>
      </CenterBox>
      <Modal title="titulo">
        <>
          {data == "providers" && <AddProvider />}
          {data == "users" && <AddProvider />}
        </>
      </Modal>
    </AdminWrapper>
  );
};
