import * as Yup from "yup";

export const addRequisicionSchema = Yup.object().shape({
  idProveedor: Yup.string().required("favor de llenar este campo"),
  descripcion: Yup.string().required("favor de llenar este campo"),
  unidad: Yup.string().required("favor de llenar este campo"),
  cantidad: Yup.string().required("favor de llenar este campo"),
  partida: Yup.string().required("favor de llenar este campo"),
  fechaPedido: Yup.string().required("favor de llenar este campo"),
  responsableArea: Yup.string().required("favor de llenar este campo"),
  departamento: Yup.string().required("favor de llenar este campo"),
});
