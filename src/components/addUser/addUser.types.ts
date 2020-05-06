export interface IAddUser {
  nombre: string;
  apellidos: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface IAddUserProps {
  setDataTable: React.Dispatch<{ rows: object[]; headers: string[] }>;
}
