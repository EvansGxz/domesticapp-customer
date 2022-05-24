import React from "react";
import { BasicContainer } from "../styles/containers";
import Imagen from "../assets/introduction2.svg";
import { Title, Img, P } from "../styles/views/Slider";

const IntroductionII = () => {
  return (
    <BasicContainer>
      <Title>Administra tus Horarios</Title>
      <Img src={Imagen} alt="introduccion-2" />
      <P>
        Creamos un paso a paso para ayudarte a entender qué hacer para recibir
        tu primer empleo y hacer un mejor uso de la aplicación.
      </P>
    </BasicContainer>
  );
};

export default IntroductionII;
