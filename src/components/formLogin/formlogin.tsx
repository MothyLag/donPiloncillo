import React from "react";
import { FormWrapper } from "./formLoginStd.styles";
import { Input } from "../inputStd/input";
import { useFormLogin } from "./formLogin.formik";
import { useFormik } from "formik";
import { IFormLogin } from "./formlogin.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const FormLogin = () => {
  const formLogin = useFormLogin();
  const formik = useFormik<IFormLogin>(formLogin);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        placeholder="Usuario"
      />
      <Input
        id="password"
        type="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <SubmitButton>Registrar</SubmitButton>
    </FormWrapper>
  );
};
