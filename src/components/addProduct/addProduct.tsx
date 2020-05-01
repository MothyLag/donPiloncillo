import React from "react";
import { FormWrapper } from "./addProductStd.styles";
import { Input } from "../inputStd/input";
import { useAddProduct } from "./addProduct.formik";
import { useFormik } from "formik";
import { IAddProduct } from "./addProduct.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const AddProduct = () => {
  const addProduct = useAddProduct();
  const formik = useFormik<IAddProduct>(addProduct);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
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
      <SubmitButton>Agregar</SubmitButton>
    </FormWrapper>
  );
};