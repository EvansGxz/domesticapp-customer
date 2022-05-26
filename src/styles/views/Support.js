import styled from "styled-components";
import { Link } from "react-router-dom";
import { azul } from "../colors";

export const SupportContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 12%;
`;

export const Title = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;
export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${azul};
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;
`;
export const NewLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const Info = styled.span`
  display: inline;
  margin-left: 3rem;
`;
