import React from "react";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Logo from "../assets/IconLogin.svg";
import {
  Input,
  Label,
  ContainerInput,
  Form,
  Title,
} from "../styles/views/Login";

const Login = () => {
  return (
    <BasicContainer>
      <img src={Logo} alt="logo-domesticapp" />
      <Title>Iniciar Sesión</Title>
      <Form>
        <ContainerInput>
          <Label>Email</Label>
          <Input type="text" placeholder="Ingresa Email" />
        </ContainerInput>
        <ContainerInput>
          <Label>Password</Label>
          <Input type="text" placeholder="Ingresa Password" />
        </ContainerInput>
        <ButtonStandard type="submit" color="azul">
          Iniciar Sesión
        </ButtonStandard>
      </Form>
    </BasicContainer>
  );
};

export default Login;
