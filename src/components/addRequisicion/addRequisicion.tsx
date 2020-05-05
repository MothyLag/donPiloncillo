import React from "react";
import { FormWrapper } from "./addRequisicionStd.styles";
import { Input } from "../inputStd/input";
import { useAddRequisicion } from "./addRequisicion.formik";
import { useFormik } from "formik";
import { IAddRequisicion } from "./addRequisicion.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";
import { useSelector } from "react-redux";
import { IAppState } from "../../utils/state.type";

export const AddRequisicion = () => {
  const addRequisicion = useAddRequisicion();
  const formik = useFormik<IAddRequisicion>(addRequisicion);
  const dataState = useSelector<IAppState>(state => state.data.data );

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
      {
        dataState=="hornillas" || dataState=="evaporacion" || dataState=="envasado" && <Input id="linea" type="select" placeholder="Escoja la linea" onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.linea} />
      }
      <Input
        id="descripcion"
        placeholder="Descripción"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.descripcion}
      />
      <Input
        id="unidad"
        placeholder="Unidad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.unidad}
      />
      <Input
        id="cantidad"
        placeholder="Cantidad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cantidad}
      />
      <Input
        id="partida"
        placeholder="Partida"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.partida}
      />
      <Input
        id="fechaPedido"
        placeholder="Fecha de pedido"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fechaPedido}
      />
      <Input
        id="responsableArea"
        placeholder="Area responsable"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.responsableArea}
      />
      <Input
        id="departamento"
        placeholder="Departamento"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.departamento}
      />
      <SubmitButton>Agregar</SubmitButton>
    </FormWrapper>
  );
};
