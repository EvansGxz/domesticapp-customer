import React from "react";
import { useAuth } from "../context/auth-context";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const ProfileInfoHeader = () => {
  const { user } = useAuth();
  return (
    <Container>
      <img src={user?.image_url} alt={user?.full_name} />
      <p>{user?.full_name}</p>
    </Container>
  );
};

export default ProfileInfoHeader;
