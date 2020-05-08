import React from "react";
import { FormWrapper } from "./addProviderStd.styles";
import { Input } from "../inputStd/input";
import { useAddProvider } from "./addProvider.formik";
import { useFormik } from "formik";
import { IAddProvider, IAddProviderProps } from "./addProvider.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const AddProvider = (props: IAddProviderProps) => {
  const { dispatch } = props;
  const addProvider = useAddProvider(dispatch);
  const formik = useFormik<IAddProvider>(addProvider);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="nombre"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nombre}
        placeholder="Nombre"
      />
      <Input
        id="apellidoP"
        placeholder="Apellido Paterno"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apellidoP}
      />
      <Input
        id="apellidoM"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apellidoM}
        placeholder="Apellido Materno"
      />
      <Input
        id="direccion"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.direccion}
        placeholder="Dirección"
      />
      <Input
        id="denominacionComercial"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.denominacionComercial}
        placeholder="Denominación Comercial"
      />
      <Input
        id="monedaProveedor"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.monedaProveedor}
        placeholder="Moneda del proveedor"
      />
      <Input
        id="representanteLegar"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.representanteLegar}
        placeholder="Representante legal"
      />
      <Input
        id="fechaRegistro"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fechaRegistro}
        placeholder="Fecha de registro"
      />
      <Input
        id="curp"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.curp}
        placeholder="Curp"
      />
      <Input
        id="correo"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.correo}
        placeholder="Correo"
      />
      <Input
        id="rfc"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rfc}
        placeholder="RFC"
      />
      <Input
        id="telefono"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.telefono}
        placeholder="Teléfono"
      />
      <SubmitButton>Agregar</SubmitButton>
    </FormWrapper>
  );
};
