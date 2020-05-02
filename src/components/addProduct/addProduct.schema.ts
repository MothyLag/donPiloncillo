import * as Yup from "yup";

export const addProductSchema = Yup.object().shape({
	idProveedor: Yup.string().required("favor de llenar este campo"),
	descripcion: Yup.string().required("favor de llenar este campo"),
});