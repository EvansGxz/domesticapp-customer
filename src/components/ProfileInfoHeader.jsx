import React from "react";
import { useAuth } from "../context/auth-context";
import { CustomerContainer, CustomerImage, CustomerName} from "../styles/views/Profile"
import {
  SupportContainer,
  NewLink,
  Info,
  ContainerIcon,
} from "../styles/views/Support";
import { IconsPerfil } from "../constantes/perfil";
const ProfileInfoHeader = () => {
  const { user } = useAuth();
  return (
    <>
    <CustomerContainer>
      <CustomerImage src={user?.image_url} alt={user?.full_name} />
      <CustomerName>{user?.full_name}</CustomerName>
    </CustomerContainer>
    <SupportContainer>

          {IconsPerfil.map((iconAyuda) => (
            <>
            <h3>{iconAyuda.titulo}</h3>
            <NewLink key={iconAyuda.id} to={iconAyuda.ruta}>
              <ContainerIcon>
                <img src={iconAyuda.img} alt={iconAyuda.nombre} />
                <Info>{iconAyuda.nombre}</Info>
              </ContainerIcon>
            </NewLink>
          </>))}
      </SupportContainer>
    </>
  );
};

export default ProfileInfoHeader;
