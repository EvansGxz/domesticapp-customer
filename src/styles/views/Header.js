import styled from "styled-components";
import { blanco, gris } from "../colors";

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  height: 13%;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0px 1px 25px -15px #1a1b15;
  z-index: 100;
  background-color: ${blanco};
`;

export const Img = styled.img`
  height: 90%;
  border-radius: 50%;
`;

export const UserData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.p`
  font-size: 2rem;
`;
export const UserName = styled.span`
  font-weight: bold;
`;
export const EmailUser = styled.span`
  color: ${gris};
`;
