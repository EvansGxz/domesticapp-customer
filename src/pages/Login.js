import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "../components/login-form";
import SignupForm from "../components/signup-customer";
import { ReactComponent as Logo } from "../Logo/DomAppLogo.svg";
//import { colors, typography } from "./styles";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  color: white;
  font-size: 2rem;
`;

const CustomLink = styled.a`
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
`;

function UnAuthLoginCustomer() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  const Shadow = {
    filter: "drop-shadow(0px 6px 7px rgba(0, 0, 0, 0.25))",
  };

  return (
    <Container>
      <Title>Welcome Customer</Title>
      <Logo style={Shadow} />
      {showLogin ? <LoginForm /> : <SignupForm />}
      <CustomLink onClick={handleLinkClick}>
        {showLogin ? "Create Account" : "Login"}
      </CustomLink>
    </Container>
  );
}

export default UnAuthLoginCustomer;
