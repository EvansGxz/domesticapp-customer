import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { useAuth } from "./context/auth-context";
import { Navigate } from "react-router-dom";
import ProfileForm from "./components/profile-form";
import CustomerHome from "./pages/home";


const Container = styled.div``;

const MainContainer = styled.main``;

function Authenticated() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Container>
      <MainContainer>
        <Routes>
          {user.full_name ? (
            <>
              <Route path="/*" element={<CustomerHome />} />
              <Route path="/home" element={<CustomerHome />} />
              <Route index element={<Navigate to="home" />} />

            </>
          ) : (
            <Route path="/*" element={<ProfileForm />} />
          )}
        </Routes>
      </MainContainer>
    </Container>
  );
}
export default Authenticated;
