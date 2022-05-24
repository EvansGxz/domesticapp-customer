import * as React from "react";
import { Routes, Route } from "react-router-dom";


import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import styled from "@emotion/styled";

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
              <Route path="/*" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route index element={<Navigate to="home" />} />

              <Route path="/verification" element={<h2>Verify</h2>} />
             
            </>
          ) : (
            <Route path="/*" element={"<ProfileForm />"} />
          )}
        </Routes>
      </MainContainer>
    </Container>
  );
}
export default Authenticated;
