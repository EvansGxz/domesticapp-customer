import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderViews from "../components/HeaderViews";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import { Line, Or, Center } from "../styles/views/Welcome";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";
import Footer from "../components/Footer";

const ServiceStep1 = () => {
  const navigate = useNavigate();
  return (
    <BasicContainer>
      <HeaderViews title="elige tu servicio" />
      <ContainerInput margin="5">
        <P>Tipo de jornada</P>
        <StyleSelect>
          <option value="">Elige tipo de jornada</option>
          <option value="completa">Jornada Completa</option>
          <option value="media">Media Jornada</option>
        </StyleSelect>
      </ContainerInput>

      <ButtonStandard margin="1" color="azul">
        Seleccionar Empleado
      </ButtonStandard>
      <Center>
        <Line></Line>
        <Or bg="blanco">OR</Or>
      </Center>
      <ButtonStandard
        marginT="2"
        color="azul"
        onClick={() => navigate("/select_service2")}
      >
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep1;
