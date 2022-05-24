import React, { useState } from "react";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Logo from "../assets/IconLogin.svg";
import Input, {
  Label,
  ContainerInput,
  Form,
  Title,
} from "../styles/views/Login";
import { useAuth } from "../context/auth-context";


export default function Login(){
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    login(form);
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }
  return (
    <BasicContainer>
      <img src={Logo} alt="logo-domesticapp" />
      <Title>Iniciar Sesión</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerInput>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={handleFormChange}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="******"
            value={form.password}
            onChange={handleFormChange}
          />
        </ContainerInput>
        <ButtonStandard type="submit" color="azul">
          Iniciar Sesión
        </ButtonStandard>
      </Form>
    </BasicContainer>
  );
};

