import { addCompraSchema } from "./addCompra.schema";
import { addCompraInitialValues } from "./addCompra.initValues";

export const useAddCompra = () => {
  return {
    initialValues: addCompraInitialValues,
    onSubmit: () => {},
    validationSchema: addCompraSchema,
  };
};