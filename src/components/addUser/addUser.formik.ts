import { addUserSchema } from "./addUser.schema";
import { addUserInitialValues } from "./addUser.initValues";
import { IAddUser } from "./addUser.types";
import { UserDB } from "../../database/users/users.pouch";
import { CHANGE_DATA } from "../../utils/state.actions";

export const useAddUser = (dispatch: any) => {
  return {
    initialValues: addUserInitialValues,
    onSubmit: (data: IAddUser) => {
      const user = new UserDB();
      return user
        .addUser(data)
        .then((res) => {
          alert("usuario agregado");
          user.getAllUsers().then((res) => {
            if (res.rows.length > 0) {
              const rows = res.rows;
              let users = rows.map((row: any) => row.doc);
              users = users.filter((item: any) => item.language === undefined);
              dispatch({
                type: CHANGE_DATA,
                payload: { newData: "Cargando..." },
              });
              dispatch({
                type: CHANGE_DATA,
                payload: { newData: "users" },
              });
            }
          });
        })
        .catch((error) => alert("no se pudo agregar el proveedor"));
    },
    validationSchema: addUserSchema,
  };
};
