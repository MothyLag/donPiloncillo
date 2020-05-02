import React from "react";
import { FormWrapper } from "./addCompraStd.styles";
import { Input } from "../inputStd/input";
import { useAddCompra } from "./addCompra.formik";
import { useFormik } from "formik";
import { IAddCompra } from "./addCompra.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const AddCompra = () => {
  const addCompra = useAddCompra();
  const formik = useFormik<IAddCompra>(addCompra);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="tipo"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.tipo}
        placeholder="Tipo"
      />
      <Input
        id="idProveedor"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.idProveedor}
        placeholder="Id del proveedor"
      />
      <Input
        id="descripcion"
        placeholder="Descripción"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.descripcion}
      />
      <Input
        id="cantidad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cantidad}
        placeholder="Cantidad"
      />
      <Input
        id="responsableArea"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.responsableArea}
        placeholder="Area Responsable"
      />
      <Input
        id="unidad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.unidad}
        placeholder="Unidad"
      />
      <Input
        id="descripcion"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.descripcion}
        placeholder="Descripción"
      />
      <Input
        id="fecha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fecha}
        placeholder="Fecha"
      />
      <Input
        id="nFolio"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.noFolio}
        placeholder="Número de folio"
      />

      <Input
        id="curp"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.curp}
        placeholder="Curp"
      />
      <Input
        id="importe"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.importe}
        placeholder="Importe"
      />
      <Input
        id="observacion"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.observacion}
        placeholder="Observaciones"
      />
      <Input
        id="iva"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.iva}
        placeholder="IVA"
      />
      <Input
        id="total"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.total}
        placeholder="Total"
      />
      <Input
        id="condicionesPago"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.condicionesPago}
        placeholder="Condiciones de pago"
      />
      <Input
        id="fehcaEntrega"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fechaEntrega}
        placeholder="Fecha de entrega"
      />

      <SubmitButton>Agregar</SubmitButton>
    </FormWrapper>
  );
};
