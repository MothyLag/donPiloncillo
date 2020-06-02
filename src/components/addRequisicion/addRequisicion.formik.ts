import { addRequisicionSchema } from "./addRequisicion.schema";
import { addRequisicionInitialValues } from "./addRequisicion.initValues";
import { CatalogueDB } from "../../database/catalogues/catalogues.pouch";
import { IAddRequisicion } from "./addRequisicion.types";
import { ICatalogue } from "../../database/catalogues/catalogues.types";
import { CHANGE_DATA } from "../../utils/state.actions";
export const useAddRequisicion = (dataState: any, dispatch: any) => {
  const currentData = dataState;
  const catalogsDB = new CatalogueDB();
  return {
    initialValues: addRequisicionInitialValues,
    onSubmit: (data: IAddRequisicion) => {
      const newCatalog = {
        ...data,
        catalogo: dataState,
      } as ICatalogue;
      catalogsDB
        .addCatalogue(newCatalog)
        .then((res) => {
          alert("requisición añadida");
          dispatch({ type: CHANGE_DATA, payload: { newData: "Cargando..." } });
          dispatch({ type: CHANGE_DATA, payload: { newData: currentData } });
        })
        .catch((error) => {
          alert("falló al añadir la requisición");
          console.log(error);
        });
    },
    validationSchema: addRequisicionSchema,
  };
};
