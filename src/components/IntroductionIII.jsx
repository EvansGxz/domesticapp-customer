import React from "react";
import { useNavigate } from "react-router-dom";
import { BasicContainer } from "../styles/containers";
import Imagen from "../assets/introduction3.svg";
import { Title, Img, P } from "../styles/views/Slider";
import { ButtonStandard } from "../styles/buttons";

const IntroductionIII = () => {
  const navigate = useNavigate();
  return (
    <BasicContainer>
      <Title>Conoce tus Ganancias</Title>
      <Img src={Imagen} alt="introduccion-3" />
      <P>
        Tus ganancias desde la aplicación. Siempre sabrás cuando se ha realizado
        un pago por ofrecer tus servicios.
      </P>
      <ButtonStandard color="azul" onClick={() => navigate("/home")}>
        Continuar
      </ButtonStandard>
    </BasicContainer>
  );
};

export default IntroductionIII;
