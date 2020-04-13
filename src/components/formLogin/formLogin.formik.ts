import { formLoginSchema } from "./formLogin.schema";
import { formLoginInitialValues } from "./formLogin.initialValues";

export const useFormLogin = () => {
	return {
		initialValues: formLoginInitialValues,
		onSubmit: () => null,
		validationSchema: formLoginSchema,
	};
};