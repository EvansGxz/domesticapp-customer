import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 1.5rem;
`;
export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const NewLink = styled(Link)`
  text-decoration: none;
`;
export const Title = styled.p`
  text-align: center;
  color: black;
`;
