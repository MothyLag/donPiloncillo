import React from "react";

import { FormWrapper } from "./newLoginStd.styles";
import { Input } from "../inputStd/input";
import { useNewLogin } from "./newLogin.formik";
import { useFormik } from "formik";
import { INewLogin } from "./newLogin.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const NewLogin = () => {
  const newLogin = useNewLogin();
  const formik = useFormik<INewLogin>(newLogin);
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <h1>Iniciar Sesión</h1>
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
      <SubmitButton>Entrar</SubmitButton>
    </FormWrapper>
  );
};
