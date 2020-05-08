import { IDataTableState } from "../../pages/adminDashboard/adminDashboard.types";

export interface IAddUser {
  nombre: string;
  apellidos: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface IAddUserProps {
  dispatch: any;
}
