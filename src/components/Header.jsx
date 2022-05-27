import React from "react";
import { useAuth } from "../context/auth-context";
import Avatar from "../assets/avatar.png";
import {
  ContainerHeader,
  Img,
  UserData,
  Title,
  UserName,
  EmailUser,
} from "../styles/views/Header";

const Header = () => {
  const { user } = useAuth();
  return (
    <ContainerHeader>
      <Img
        src={user?.image_url ? user?.image_url : Avatar}
        alt={user?.full_name}
      />
      <UserData>
        <Title>
          Hola <UserName>{user?.full_name}</UserName>!
        </Title>
        <EmailUser>{user?.email}</EmailUser>
      </UserData>
    </ContainerHeader>
  );
};

export default Header;
