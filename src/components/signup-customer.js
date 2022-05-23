import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
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

export default function SignupForm() {
  const { customerSignup } = useAuth();
  const [form, setForm] = useState({
    user_type: "customer",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({
    user_type: "customer",
    email: "",
    password: "",
    password_confirmation: "",
  });
  //src\signup-form.js

  function handleSubmit(event) {
    event.preventDefault();

    customerSignup(form).catch((error) => {
      const newErrors = JSON.parse(error.message);
      setErrors({ ...errors, ...newErrors });
    });
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
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
        error={errors.email.toString()}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="******"
        value={form.password}
        onChange={handleFormChange}
        error={errors.password.toString()}
      />
      <Input
        id="password_confirmation"
        label="password confirmation"
        type="password"
        placeholder="******"
        value={form.password_confirmation}
        onChange={handleFormChange}
        error={errors.password_confirmation.toString()}
      />

      <Button type="submit">Sign Up</Button>
    </StyledForm>
  );
}
