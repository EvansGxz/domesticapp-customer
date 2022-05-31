import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function UnAuthenticated() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default UnAuthenticated;
