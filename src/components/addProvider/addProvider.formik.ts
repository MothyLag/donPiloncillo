import { addProviderSchema } from "./addProvider.schema";
import { addProviderInitialValues } from "./addProvider.initValues";

export const useAddProvider = () => {
  return {
    initialValues: addProviderInitialValues,
    onSubmit: () => {},
    validationSchema: addProviderSchema,
  };
};