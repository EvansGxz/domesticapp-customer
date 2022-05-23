import * as React from "react";
import { Routes, Route } from "react-router-dom";

import styled from '@emotion/styled'
import SignupForm from "./components/signup-customer";
import AppVerify from "./App";
import WelcomePage from "./pages/WelcomePage";
import UnAuthenticated from "./pages/Login";

const Container = styled.div`

`;

const MainContainer = styled.main`

`;

function UnAuth(){
    return(
      <Container>
      <MainContainer>
      <Routes>
            <>
        <Route path="/" element={"Loading"} />
        <Route path="/loading" element={"Loading"}  />
        <Route path="/login" element={<UnAuthenticated />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/verify" element={<AppVerify />} />
        <Route path="/loading" element={"Loading"}  />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/*" element={"Loading"}  />
        </>
      </Routes>
      </MainContainer>
      </Container>
    );
}
export default UnAuth;
