import { Link } from "react-router-dom";
import styled from "styled-components";
import { azul, azulF, blanco, gris } from "../colors";

export const Select = styled.select`
  background-color: ${azulF};
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.5rem;
  color: ${blanco};
  margin-bottom: 3rem;
`;
export const ContainerButtons = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Or = styled.div`
  font-weight: bold;
  z-index: 100;
  background-color: ${azul};
  border: 2px solid ${azul};
  border-radius: 50%;
  padding: 1rem; ;
`;

export const Line = styled.div`
  width: 70%;
  height: 0.1rem;
  background-color: ${gris};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const P = styled.p`
  color: ${blanco};
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: ${blanco};
`;
