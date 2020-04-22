import * as Yup from "yup";

export const newLoginSchema = Yup.object().shape({
	username: Yup.string().required("Por favor, ingrese su usuario"),
	password: Yup.string().required("Por favor, ingrese su contraseña"),
});