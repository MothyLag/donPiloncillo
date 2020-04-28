import { newLoginSchema } from "./newLogin.schema";
import { newLoginInitialValues } from "./newLogin.initialValues";
import { UserDB } from "../../database/users/users.pouch";
import { INewLogin } from "./newLogin.types";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../utils/state.actions";

export const useNewLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return {
    initialValues: newLoginInitialValues,
    onSubmit: async (data: INewLogin) => {
      const userDb = new UserDB();
      userDb
        .logIn(data)
        .then(async (res) => {
          if (res.docs.length > 0) {
            alert(`Bienvenido: ${res.docs[0].username}`);
          } else {
            if (
              data.username === "admin" &&
              data.password === "donpiloncillo2020"
            ) {
              await dispatch({ type: LOG_IN });
              history.replace("/adminDashboard");
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
