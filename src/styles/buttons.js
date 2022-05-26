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
  margin-top: ${({ marginT }) => (marginT ? `${marginT}rem` : 0)};
  margin-bottom: ${({ marginB }) => (marginB ? `${marginB}rem` : "1.5rem")};
  margin-left: auto;
  margin-right: auto;
`;
