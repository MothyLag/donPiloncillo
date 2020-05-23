import React, { useEffect, useState } from "react";
import { FormWrapper } from "./addRequisicionStd.styles";
import { Input } from "../inputStd/input";
import { useAddRequisicion } from "./addRequisicion.formik";
import { useFormik } from "formik";
import { IAddRequisicion } from "./addRequisicion.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../utils/state.type";
import { ProviderDB } from "../../database/providers/providers.pouch";

interface ISelectData {
  text: string;
  value: string;
}

export const AddRequisicion = () => {
  const dataState = useSelector<IAppState>((state) => state.data.data);
  const dispatch = useDispatch();
  const addRequisicion = useAddRequisicion(dataState, dispatch);
  const formik = useFormik<IAddRequisicion>(addRequisicion);
  const [idsData, setIdsData] = useState<ISelectData[]>([]);
  const providerDb = new ProviderDB();
  useEffect(() => {
    providerDb.getAllProviders().then((res) => {
      let newData: ISelectData[] = res.rows.map((provider: any) => {
        return {
          value: provider.doc._id,
          text: provider.doc.denominacionComercial,
        } as ISelectData;
      });
      setIdsData(newData);
      console.log(newData);
    });
  }, []);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="idProveedor"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.idProveedor}
        placeholder="Id del proveedor"
        dataSelect={idsData}
      />
      {(dataState == "hornillas" ||
        dataState == "evaporacion" ||
        dataState == "envasado") && (
        <Input
          id="linea"
          type="select"
          placeholder="Escoja la linea"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linea}
          dataSelect={[
            { text: "Liena 1", value: "Liena 1" },
            { text: "Liena 2", value: "Liena 2" },
            { text: "Liena 3", value: "Liena 3" },
            { text: "Liena 4", value: "Liena 4" },
            { text: "Liena 5", value: "Liena 5" },
          ]}
        />
      )}
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
