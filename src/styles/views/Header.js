import styled from "styled-components";
import { gris } from "../colors";

export const ContainerHeader = styled.div`
  height: 20%;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Img = styled.img`
  height: 90%;
  width: 10%;
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
