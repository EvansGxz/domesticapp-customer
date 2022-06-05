import styled from "styled-components";

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

export const ContainerImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: contain;
`;

export const UserName = styled.p`
  flex: 3;
  font-size: 3rem;
  font-weight: bold;
`;

export const Servicios = styled.p`
  color: grey;
  margin-top: 1rem;
`;