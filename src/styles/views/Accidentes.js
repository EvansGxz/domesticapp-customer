import styled from "styled-components";
import { azul, blanco, gris } from "../colors";

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ContainerInfo = styled.div`
  border-bottom: 1px solid ${azul};
`;
export const Title = styled.h3`
  margin: 1rem auto;
`;
export const PInfo = styled.p`
  margin-bottom: 1rem;
  color: ${gris};
`;

export const Textarea = styled.textarea`
  border-radius: 0.5rem;
  resize: none;
  padding: 1rem;
  height: 8rem;
  border-radius: 1rem;
`;
export const ContainerInputM = styled.div`
  position: relative;
  width: 90%;
  margin: 2rem auto;
  height: 5.5rem;
  color: ${blanco};
  border-radius: 1rem;
  background-color: ${azul};
`;
export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputMultiple = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  opacity: 0;
`;
