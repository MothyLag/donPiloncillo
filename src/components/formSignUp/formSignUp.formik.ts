import { formSignUpSchema } from "./formSignUp.schema";
import { formSignUpInitialValues } from "./formSignUp.initialValues";
export const useFormSignUp = () => {
  return {
    initialValues: formSignUpInitialValues,
    onSubmit: () => {},
    validationSchema: formSignUpSchema,
  };
};
