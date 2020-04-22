import { newLoginSchema } from "./newLogin.schema";
import { newLoginInitialValues } from "./newLogin.initialValues";

export const useNewLogin = () => {
	return {
		initialValues: newLoginInitialValues,
		onSubmit: () => {},
		validationSchema: newLoginSchema,
	};
};