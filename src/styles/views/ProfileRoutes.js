import { azul } from "../colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin: 2rem auto 20% auto;
`;

export const ContainerCategoria = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
`;
export const Title = styled.h3`
  font-size: bold;
  text-align: start;
  margin: 1rem 0;
`;

export const ContainerLinks = styled.div`
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
`;

export const ContainerLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${azul};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 500;
  margin-left: 1rem;
`;
