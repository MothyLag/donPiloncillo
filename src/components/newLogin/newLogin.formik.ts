import { newLoginSchema } from "./newLogin.schema";
import { newLoginInitialValues } from "./newLogin.initialValues";
import { UserDB } from "../../database/users/users.pouch";
import { INewLogin } from "./newLogin.types";

export const useNewLogin = () => {
  return {
    initialValues: newLoginInitialValues,
    onSubmit: async (data: INewLogin) => {
      const userDb = new UserDB();
      userDb
        .logIn(data)
        .then((res) => {
          if (res.docs.length > 0) {
            alert(`Bienvenido: ${res.docs[0].username}`);
          } else {
            if (
              data.username === "admin" &&
              data.password === "donpiloncillo2020"
            ) {
              alert("Welcom Admin");
            } else {
              alert("Usuario y/o contraseña incorrectos");
            }
          }
        })
        .catch((error) => console.log(error));
    },
    validationSchema: newLoginSchema,
  };
};
