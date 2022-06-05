import styled from "styled-components";
import { azul, blanco } from "./colors";

export const BasicContainer = styled.div`
  width: 100%;
  background-color: ${({ color }) => (color === "blue" ? azul : blanco)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  width: 100%;
  margin: 1rem auto 15% auto;
`;
