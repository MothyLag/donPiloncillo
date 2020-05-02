import { addRequisicionSchema } from "./addRequisicion.schema";
import { addRequisicionInitialValues } from "./addRequisicion.initValues";

export const useAddRequisicion = () => {
  return {
    initialValues: addRequisicionInitialValues,
    onSubmit: () => {},
    validationSchema: addRequisicionSchema,
  };
};