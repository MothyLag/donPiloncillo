import * as Yup from "yup";

export const addProviderSchema = Yup.object().shape({
	nombre: Yup.string().required("favor de llenar este campo"),
	apellidoP: Yup.string().required("favor de llenar este campo"),
	apellidoM: Yup.string().required("favor de llenar este campo"),
	direccion: Yup.string().required("favor de llenar este campo"),
	denominacionComercial: Yup.string().required("favor de llenar este campo"),
	monedaProveedor: Yup.string().required("favor de llenar este campo"),
	representanteLegar: Yup.string().required("favor de llenar este campo"),
	fechaRegistro: Yup.string().required("favor de llenar este campo"),
	curp: Yup.string().required("favor de llenar este campo"),
	correo: Yup.string().required("favor de llenar este campo"),
	rfc: Yup.string().required("favor de llenar este campo"),
	telefono: Yup.string().required("favor de llenar este campo"),
});