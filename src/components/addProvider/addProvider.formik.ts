import { addProviderSchema } from "./addProvider.schema";
import { addProviderInitialValues } from "./addProvider.initValues";
import { IAddProvider } from "./addProvider.types";
import { ProviderDB } from "../../database/providers/providers.pouch";
import { CHANGE_DATA } from "../../utils/state.actions";

export const useAddProvider = (dispatch: any) => {
  return {
    initialValues: addProviderInitialValues,
    onSubmit: async (data: IAddProvider) => {
      const provider = new ProviderDB();
      provider
        .addProvider(data)
        .then((res) => {
          dispatch({
            type: CHANGE_DATA,
            payload: { newData: "Cargando..." },
          });
          dispatch({
            type: CHANGE_DATA,
            payload: { newData: "providers" },
          });
          alert("proveedor agregado");
        })
        .catch((error) => {
          alert("no se pudo agregar el proveedor");
          console.log(error);
        });
    },
    validationSchema: addProviderSchema,
  };
};
