import { addProductSchema } from "./addProduct.schema";
import { addProductInitialValues } from "./addProduct.initValues";

export const useAddProduct = () => {
  return {
    initialValues: addProductInitialValues,
    onSubmit: () => {},
    validationSchema: addProductSchema,
  };
};