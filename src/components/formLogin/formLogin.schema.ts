import * as Yup from "yup";

export const formLoginSchema = Yup.object().shape({
	username: Yup.string().required("favor de llenar este campo"),
	password: Yup.string().required("favor de llenar este campo"),
});