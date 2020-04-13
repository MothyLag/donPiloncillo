import * as Yup from "yup";

export const formSignUpSchema = Yup.object().shape({
  name: Yup.string().required("favor de llenar este campo"),
  lastName: Yup.string().required("favor de llenar este campo"),
  birthDay: Yup.date(),
  gender: Yup.string(),
  ocupation: Yup.string(),
  email: Yup.string()
    .email("el correo es invalido")
    .required("favor de llenar este campo"),
  emailSecondary: Yup.string()
    .email("el correo es invalido")
    .required("favor de llenar este campo"),
  cellPhone: Yup.number(),
  phone: Yup.number(),
  state: Yup.string(),
  city: Yup.string(),
  address: Yup.string(),
  postal: Yup.string(),
  creditID: Yup.string(),
  password: Yup.string().required("favor de llenar este campo"),
});
