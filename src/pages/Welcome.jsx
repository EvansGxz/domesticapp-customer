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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
        <ButtonStandard color="morado">
          {" "}
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ marginRight: "10px" }}
          />{" "}
          Continúa con Google
        </ButtonStandard>
        <ButtonStandard color="verde">
          {" "}
          <FontAwesomeIcon
            icon={faPhone}
            style={{ marginRight: "10px" }}
          />{" "}
          Continúa con tu celular
        </ButtonStandard>
        <ButtonStandard>
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: "10px" }} />{" "}
          Continúa con Facebook
        </ButtonStandard>
      </ContainerButtons>
      <Center>
        <Line></Line>
        <Or>OR</Or>
      </Center>
      <ButtonStandard color="rojo" onClick={() => navigate("/login")}>
        Iniciar Sesión
      </ButtonStandard>
      <P>
        ¿No tienes cuenta? <StyledLink to="/signup">Registrate</StyledLink>{" "}
      </P>
    </BasicContainer>
  );
};

export default Welcome;
