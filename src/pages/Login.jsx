import React, { useState } from "react";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Logo from "../assets/IconLogin.svg";
import { Form, Title, Input } from "../styles/views/Login";
import { useAuth } from "../context/auth-context";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(form);
  }

  return (
    <BasicContainer>
      <img src={Logo} alt="logo-domesticapp" />
      <Title>Iniciar Sesión</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={handleFormChange}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="******"
          value={form.password}
          onChange={handleFormChange}
        />

        <ButtonStandard type="submit" color="azul">
          Iniciar Sesión
        </ButtonStandard>
      </Form>
    </BasicContainer>
  );
}
