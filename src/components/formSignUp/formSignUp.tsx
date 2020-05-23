import React from "react";
import { FormWrapper } from "./formSignUpStd.styles";
import { Input } from "../inputStd/input";
import { useFormSignUp } from "./formSignUp.formik";
import { useFormik } from "formik";
import { IFormSignUp } from "./formSignUp.types";
import { SubmitButton } from "../submitbutton/submitbutton.styles";

export const FormSignUp = () => {
  const formSignUp = useFormSignUp();
  const formik = useFormik<IFormSignUp>(formSignUp);
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Nombres"
      />
      <Input
        id="lastName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Apellidos"
      />
      <Input
        id="birthDay"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birthDay}
      />
      <Input
        id="gender"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender}
        placeholder="selecióne su sexo"
        type="select"
        dataSelect={[
          { text: "Masculino", value: "Masculino" },
          { text: "Femenino", value: "Femenino" },
          { text: "Otro", value: "Otro" },
        ]}
      />
      <Input
        id="ocupation"
        placeholder="Ocupacion"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ocupation}
      />
      <Input
        id="email"
        placeholder="Correo electrónico"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <Input
        id="emailSecondary"
        placeholder="Correo electrónico secundario"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.emailSecondary}
      />
      <Input
        id="cellPhone"
        type="number"
        placeholder="Número de celular"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cellPhone}
      />
      <Input
        id="city"
        placeholder="Ciudad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      <Input
        id="address"
        placeholder="Domicilio"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      <Input
        id="postal"
        type="number"
        placeholder="Código Postal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postal}
      />
      <Input
        id="creditID"
        placeholder="CREDIT ID"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.creditID}
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
