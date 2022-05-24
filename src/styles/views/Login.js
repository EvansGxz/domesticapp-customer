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

export const Input = styled.input`
  width: 100%;

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


export const ContainerInputImg = styled.div`
  position: relative;
  margin: 3rem auto;
  width: 100%;
  height: 100%;
`;

 export const InputImg = styled.input`
  width: 0.1rem;
  height: 0.1rem;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const LabelImg = styled.label`
  position: absolute;
`;
