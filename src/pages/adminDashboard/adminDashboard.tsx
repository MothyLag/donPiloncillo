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
import { AddRequisicion } from "../../components/addRequisicion/addRequisicion";
import { IDataTableState } from "./adminDashboard.types";
import { CatalogueDB } from "../../database/catalogues/catalogues.pouch";
import { DropdownButtonB } from "../../components/dropdownButtonB/dropdownButtonB";

export const AdminDashboard = () => {
  const logged = useSelector<IAppState>((state) => state.session.logged);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector<IAppState>((state) => state.data.data);
  const providersDB = new ProviderDB();
  const catalogsDB = new CatalogueDB();
  const userDB = new UserDB();
  const [dataTable, setDataTable] = useState<IDataTableState>({
    rows: [],
    headers: [],
  });
  useEffect(() => {
    if (!logged) {
      //history.replace("/");
    }
  }, [logged, history]);

  useEffect(() => {
    if (data === "Proveedores") {
      providersDB.getAllProviders().then((res) => {
        if (res.rows.length > 0) {
          const rows = res.rows;
          const providers = rows.map((row: any) => {
            return {
              ...row.doc,
              acciones: (
                <CuteButton
                  text="Borrar"
                  clickHandler={() => {
                    const currentData = data;
                    providersDB.deleteProvider(row.doc).then((res) => {
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: "Cargando..." },
                      });
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: currentData },
                      });
                    });
                  }}
                />
              ),
            };
          });
          setDataTable({ rows: providers, headers: Object.keys(providers[0]) });
        } else {
          setDataTable({ rows: [], headers: [] });
        }
      });
    }
    if (data === "Usuarios") {
      userDB.getAllUsers().then((res) => {
        if (res.rows.length > 0) {
          const rows = res.rows;
          let users = rows.map((row: any) => {
            return {
              ...row.doc,
              acciones: (
                <CuteButton
                  text="Borrar"
                  clickHandler={() => {
                    const currentData = data;
                    userDB.deleteUser(row.doc).then((res) => {
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: "Cargando..." },
                      });
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: currentData },
                      });
                    });
                  }}
                />
              ),
            };
          });
          users = users.filter((item: any) => item.language === undefined);
          setDataTable({ rows: users, headers: Object.keys(users[0]) });
        } else {
          setDataTable({ rows: [], headers: [] });
        }
      });
    }
    if (
      data !== "Proveedores" &&
      data !== "Usuarios" &&
      data !== "Cargando..."
    ) {
      catalogsDB.getAllCatalogues(data as string).then((res: any) => {
        if (res.docs.length > 0) {
          const rows = res.docs;
          const catalogues = rows.map((row: any) => {
            return {
              ...row,
              acciones: (
                <CuteButton
                  text="Borrar"
                  clickHandler={() => {
                    const currentData = data;
                    catalogsDB.deleteCatalogue(row).then((res) => {
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: "Cargando..." },
                      });
                      dispatch({
                        type: CHANGE_DATA,
                        payload: { newData: currentData },
                      });
                    });
                  }}
                />
              ),
            };
          });
          setDataTable({
            rows: catalogues,
            headers: Object.keys(catalogues[0]),
          });
        } else {
          setDataTable({ rows: [], headers: [] });
        }
      });
    }
  }, [data]);

  return (
    <AdminWrapper>
      <Navbar>
        <DropdownButtonB
          options={[
            "Molino",
            "Báscula",
            "Emplaye",
            "Empaque",
            "Almacén",
            "Bodega de empaque",
            "Laboratorio",
            "Limpieza",
            "Cocina",
            "Mantenimiento",
            "Potabilizadora",
            "Administración",
            "Centro de Acopio",
            "Cosecha",
            "Hornillas",
            "Evaporación",
            "Llenado y Envasado",
            "Producción",
            "Reporte",
          ]}
          text="Catálogo"
        />
        <CuteButton
          text="Proveedores"
          clickHandler={() =>
            dispatch({ type: CHANGE_DATA, payload: { newData: "Proveedores" } })
          }
        />
        <CuteButton
          text="Usuarios"
          clickHandler={() =>
            dispatch({ type: CHANGE_DATA, payload: { newData: "Usuarios" } })
          }
        />
      </Navbar>
      <CenterBox>
        <BoxContWrapper>
          <h1>{data as string}</h1>
          {dataTable.rows.length > 0 ? (
            <CustomTable data={dataTable.rows} headers={dataTable.headers} />
          ) : (
            <h1>No hay datos en {data}</h1>
          )}
        </BoxContWrapper>
        <FloatButton
          backgroundColor="#67676A"
          width="50px"
          icon={faPlus}
          color="white"
          clickHandler={() => dispatch({ type: OPEN_MODAL })}
        ></FloatButton>
      </CenterBox>
      <Modal title={`Agregar ${data}`}>
        <>
          {data == "Proveedores" && <AddProvider dispatch={dispatch} />}
          {data == "Usuarios" && <AddUser dispatch={dispatch} />}
          {data != "Proveedores" && data != "Usuarios" && <AddRequisicion />}
        </>
      </Modal>
    </AdminWrapper>
  );
};
