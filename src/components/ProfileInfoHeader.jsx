import React from "react";
import { useAuth } from "../context/auth-context";
import {
  SupportContainer,
  NewLink,
  Info,
  ContainerIcon,
} from "../styles/views/Support";
import {
  ContainerImg,
  ContainerInfo,
  Container,
  Img,
  UserName,
  Servicios,
} from "../styles/views/ProfileHeader";
import { IconsPerfil } from "../constantes/perfil";
const ProfileInfoHeader = () => {
  const { user } = useAuth();
  return (
    <>
    <ContainerInfo>
      <Container>
        <ContainerImg>
          <Img src={user?.image_url} alt={user?.full_name} />
        </ContainerImg>
        <UserName>{user?.full_name}</UserName>
      </Container>
      <Servicios>325 Servicios Solicitados</Servicios>
    </ContainerInfo>
    </>
  );
}
export default ProfileInfoHeader;
