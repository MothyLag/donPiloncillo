import { addUserSchema } from "./addUser.schema";
import { addUserInitialValues } from "./addUser.initValues";

export const useAddUser = () => {
  return {
    initialValues: addUserInitialValues,
    onSubmit: () => {},
    validationSchema: addUserSchema,
  };
};