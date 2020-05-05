import { addProviderSchema } from "./addProvider.schema";
import { addProviderInitialValues } from "./addProvider.initValues";
import { IAddProvider } from "./addProvider.types";
import { ProviderDB } from "../../database/providers/providers.pouch";

export const useAddProvider = () => {
  return {
    initialValues: addProviderInitialValues,
    onSubmit: async (data: IAddProvider) => {
      const provider = new ProviderDB();
      console.log(data);
      provider
        .addProvider(data)
        .then((res) => {
          alert("proveedor agregado");
          console.log(res);
        })
        .catch((error) => alert("no se pudo agregar el proveedor"));
    },
    validationSchema: addProviderSchema,
  };
};
