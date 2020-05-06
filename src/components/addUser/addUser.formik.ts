import { addUserSchema } from "./addUser.schema";
import { addUserInitialValues } from "./addUser.initValues";
import { IAddUser } from "./addUser.types";
import { UserDB } from "../../database/users/users.pouch";

export const useAddUser = (
  setDataTable: React.Dispatch<{
    rows: object[];
    headers: string[];
  }>
) => {
  return {
    initialValues: addUserInitialValues,
    onSubmit: (data: IAddUser) => {
      const user = new UserDB();
      return user
        .addUser(data)
        .then((res) => {
          alert("proveedor agregado");
          user.getAllUsers().then((res) => {
            if (res.rows.length > 0) {
              const rows = res.rows;
              let users = rows.map((row: any) => row.doc);
              users = users.filter((item: any) => item.language === undefined);
              setDataTable({ rows: users, headers: Object.keys(users[0]) });
            }
          });
        })
        .catch((error) => alert("no se pudo agregar el proveedor"));
    },
    validationSchema: addUserSchema,
  };
};
