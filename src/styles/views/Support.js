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

export const SupportCardText = styled.div`

  margin: 15px auto 20px auto;
  max-width: 90%;
  padding: 14px;
  background-color: #fff;
  box-shadow: 0px 20px 20px rgba(57, 57, 57, 0.1);
  border-radius: 10px;
  text-align: justify;
`;

export const SupportCardTitle = styled.div`
  font-weight: bold;
  margin: 15px auto 0px auto;
  max-width: 90%;
  padding: 14px;
  background-color: #fff;
  box-shadow: 0px 20px 20px rgba(57, 57, 57, 0.1);
  border-radius: 10px;
  
`;

export const BlueTitle = styled.h3`
  margin: 2rem 0;
  text-align: center;
  color: #0BBBEF;
`;

export const Body = styled.p`
  margin: 2rem 0;
  text-align: justify;
  color: #000000;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 22.5px
`;