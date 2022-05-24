import styled from "styled-components";
import { azul, rojo, verde, morado, azulFace } from "./colors";

export const ButtonStandard = styled.button`
  width: ${({ width }) => (width ? width : "90%")};
  height: 5.5rem;
  border-radius: 1rem;
  background-color: ${({ color }) =>
    color === "azul"
      ? azul
      : color === "rojo"
      ? rojo
      : color === "morado"
      ? morado
      : color === "verde"
      ? verde
      : azulFace};
  border: none;
  color: white;
  margin: 0 auto 1.5rem auto;
`;
