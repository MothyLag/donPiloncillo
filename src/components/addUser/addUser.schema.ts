import * as Yup from "yup";

export const addUserSchema = Yup.object().shape({
	nombre: Yup.string().required("favor de llenar este campo"),
	apellidos: Yup.string().required("favor de llenar este campo"),
	username: Yup.string().required("favor de llenar este campo"),
	password: Yup.string().required("favor de llenar este campo"),
	passwordConfirm: Yup.string().required("favor de llenar este campo"),
});