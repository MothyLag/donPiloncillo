import { addUserSchema } from "./addUser.schema";
import { addUserInitialValues } from "./addUser.initValues";
import { IAddUser } from "./addUser.types";
import { UserDB } from "../../database/users/users.pouch";

export const useAddUser = () => {
  return {
    initialValues: addUserInitialValues,
    onSubmit: (data: IAddUser) => {
      const user = new UserDB();
      return user
        .addUser(data)
        .then((res) => {
          alert("proveedor agregado");
          console.log(res);
        })
        .catch((error) => alert("no se pudo agregar el proveedor"));
    },
    validationSchema: addUserSchema,
  };
};
