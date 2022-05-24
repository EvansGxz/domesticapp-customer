import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/DomAppLogo.svg";
import { paises } from "../constantes/paises";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import {
  Center,
  ContainerButtons,
  Or,
  Line,
  Select,
  P,
  StyledLink,
} from "../styles/views/Welcome";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <BasicContainer color="blue">
      <Select>
        {paises.map((pais) => (
          <option key={pais.id} value={pais.pais}>
            {pais.pais}
          </option>
        ))}
      </Select>
      <img src={Logo} alt="logo-domesticaApp" />
      <ContainerButtons>
        <ButtonStandard color="morado">Continúa con Google</ButtonStandard>
        <ButtonStandard color="verde">Continúa con tu celular</ButtonStandard>
        <ButtonStandard>Continúa con Facebook</ButtonStandard>
      </ContainerButtons>
      <Center>
        <Line></Line>
        <Or>OR</Or>
      </Center>
      <ButtonStandard color="rojo" onClick={() => navigate("/login")}>
        Iniciar Sesión
      </ButtonStandard>
      <P>
        ¿No tienes cuenta? <StyledLink to="/">Registrate</StyledLink>{" "}
      </P>
    </BasicContainer>
  );
};

export default Welcome;
