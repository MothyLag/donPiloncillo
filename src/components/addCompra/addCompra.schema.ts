import * as Yup from "yup";

export const addCompraSchema = Yup.object().shape({
	tipo: Yup.string().required("favor de llenar este campo"),
	cantidad: Yup.string().required("favor de llenar este campo"),
	responsableArea: Yup.string().required("favor de llenar este campo"),
	unidad: Yup.string().required("favor de llenar este campo"),
	descripcion: Yup.string().required("favor de llenar este campo"),
	fecha: Yup.string().required("favor de llenar este campo"),
	noFolio: Yup.string().required("favor de llenar este campo"),
	idProveedor: Yup.string().required("favor de llenar este campo"),
	importe: Yup.string().required("favor de llenar este campo"),
	observacion: Yup.string().required("favor de llenar este campo"),
	iva: Yup.string().required("favor de llenar este campo"),
	total: Yup.string().required("favor de llenar este campo"),
	condicionesPago: Yup.string().required("favor de llenar este campo"),
	tiempoEntrega: Yup.string().required("favor de llenar este campo"),
	precioUnitario: Yup.string().required("favor de llenar este campo"),
});

