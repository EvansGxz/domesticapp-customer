import styled from "styled-components";
import { gris } from "../colors";

export const Title = styled.p`
  text-align: center;
  margin: 1rem 0;
  font-size: 3rem;
`;

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
`;

export const Label = styled.label`
  color: ${gris};
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid grey;
  margin: 0.5rem 0;
`;
function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <ContainerInput>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </ContainerInput>
  );
}

export default Input;