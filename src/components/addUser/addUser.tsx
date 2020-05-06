import React from "react";
import { FormWrapper } from "./addUserStd.styles";
import { Input } from "../inputStd/input";
import { useAddUser } from "./addUser.formik";
import { useFormik } from "formik";
import { IAddUser, IAddUserProps } from "./addUser.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const AddUser = (props: IAddUserProps) => {
  const { setDataTable } = props;
  const addUser = useAddUser(setDataTable);
  const formik = useFormik<IAddUser>(addUser);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="nombre"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nombre}
        placeholder="Nombre"
      />
      <Input
        id="apellidos"
        placeholder="Apellidos"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apellidos}
      />
      <Input
        id="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        placeholder="Nombre de usuario"
      />
      <Input
        id="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Contraseña"
      />
      <Input
        id="passwordConfirm"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirm}
        placeholder="Repetir contraseña"
      />
      <SubmitButton>Agregar</SubmitButton>
    </FormWrapper>
  );
};
