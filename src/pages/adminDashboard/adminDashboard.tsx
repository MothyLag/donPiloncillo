import React, { useEffect, useState } from "react";
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
import { CustomTable } from "../../components/customTable/customTable";
import { FloatButton } from "../../components/floatButton/floatButton";
import { Modal } from "../../components/modal/modal";
import { OPEN_MODAL, CHANGE_DATA } from "../../utils/state.actions";
import { AddProvider } from "../../components/addProvider/addProvider";
import { ProviderDB } from "../../database/providers/providers.pouch";
import { UserDB } from "../../database/users/users.pouch";
import { AddUser } from "../../components/addUser/addUser";

export const AdminDashboard = () => {
  const logged = useSelector<IAppState>((state) => state.session.logged);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector<IAppState>((state) => state.data.data);
  const providersDB = new ProviderDB();
  const usersDB = new UserDB();
  const [dataTable, setDataTable] = useState({ rows: [{}], headers: [""] });
  useEffect(() => {
    if (!logged) {
      //history.replace("/");
    }
  }, [logged, history]);

  useEffect(() => {
    if (data === "providers") {
      providersDB.getAllProviders().then((res) => {
        if (res.rows.length > 0) {
          const rows = res.rows;
          const providers = rows.map((row: any) => row.doc);
          console.log(Object.keys(providers[0]));
          setDataTable({ rows: providers, headers: Object.keys(providers[0]) });
        }
      });
    }
    if (data === "users") {
      usersDB.getAllUsers().then((res) => {
        console.log(res.rows);
        if (res.rows.length > 0) {
          const rows = res.rows;
          const users = rows.map((row: any) => row.doc);
          console.log(Object.keys(users[0]));
          setDataTable({ rows: users, headers: Object.keys(users[0]) });
        }
      });
    }
  }, [data]);

  return (
    <AdminWrapper>
      <Navbar>
        <CuteButton text="Catalogos" />
        <CuteButton
          text="Proveedores"
          clickHandler={() =>
            dispatch({ type: CHANGE_DATA, payload: { newData: "providers" } })
          }
        />
        <CuteButton
          text="Usuarios"
          clickHandler={() =>
            dispatch({ type: CHANGE_DATA, payload: { newData: "users" } })
          }
        />
      </Navbar>
      <CenterBox>
        <BoxContWrapper>
          <CustomTable data={dataTable.rows} headers={dataTable.headers} />
        </BoxContWrapper>
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
          {data == "users" && <AddUser />}
        </>
      </Modal>
    </AdminWrapper>
  );
};
