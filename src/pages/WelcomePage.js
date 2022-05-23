import DropDownLanguages from "../components/DropDown/DropDownLanguages";
import { ReactComponent as LogoDomesticapp } from "../Logo/DomAppLogo.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Shadow = {
  filter: "drop-shadow(0px 6px 7px rgba(0, 0, 0, 0.25))",
};

const Button = styled.button`
  width: 320px;
  height: 55px;
  border-radius: 10px;
  background-color: #ec607e;
  border: none;
  color: white;
  margin-bottom: 10px;
`;

export let employee, customer;
export default function WelcomePage() {
  const navigate = useNavigate();
  function handleLinkClick(event) {
    event.preventDefault();
    navigate("/login");
  }
  return (
    <Wrapper>
      <DropDownLanguages />
      <LogoDomesticapp style={Shadow} />
      <Button onClick={handleLinkClick}>Aceptar</Button>
    </Wrapper>
  );
}
