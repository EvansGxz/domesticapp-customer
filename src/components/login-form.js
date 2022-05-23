import styled from "@emotion/styled";
import { useState } from "react";
import Input from "./input";
import { useAuth } from "../context/auth-context";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2rem;
`;
const Button = styled.button`
  width: 320px;
  height: 55px;
  border-radius: 10px;
  background-color: #ec607e;
  border: none;
  color: white;
  margin-bottom: 10px;
`;

export default function LoginForm() {
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
    <StyledForm onSubmit={handleSubmit}>
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
      <Button type="submit">Login</Button>
    </StyledForm>
  );
}
