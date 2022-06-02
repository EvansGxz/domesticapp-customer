import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderViews from "../components/HeaderViews";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import { Line, Or, Center } from "../styles/views/Welcome";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";
import Footer from "../components/Footer";

export let cart = []
const ServiceStep1 = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const navigate = useNavigate();
  const [jor, setJor] = useState(null);
  cart = [];
  function setJornada(){
    cart.push(id, jor);
    navigate("/select_service2")
  }
  return (
    <BasicContainer>
      <HeaderViews title="elige tu servicio" />
      <ContainerInput margin="5">
        <P>Tipo de jornada</P>
        <StyleSelect onChange={(e) => setJor(e.target.value)}>
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
        onClick={() => setJornada()}
      >
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep1;
