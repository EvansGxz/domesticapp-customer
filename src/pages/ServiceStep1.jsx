import React from "react";
import HeaderViews from "../components/HeaderViews";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import { Line, Or, Center } from "../styles/views/Welcome";
import Footer from "../components/Footer";
import styled from "styled-components";

const ContainerSelect = styled.div`
  width: 100%;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Select = styled.select`
  border: 1px solid gray;
  padding: 1.5rem 2rem;
  background-color: transparent;
  border-radius: 0.5rem;
  color: grey;
  margin: 1rem 0;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

const ServiceStep1 = () => {
  return (
    <BasicContainer>
      <HeaderViews title="elige tu servicio" />
      <ContainerSelect>
        <P>Tipo de jornada</P>
        <Select>
          <option value="">Elige tipo de jornada</option>
          <option value="completa">Jornada Completa</option>
          <option value="media">Media Jornada</option>
        </Select>
      </ContainerSelect>

      <ButtonStandard margin="1" color="azul">
        Seleccionar Empleado
      </ButtonStandard>
      <Center>
        <Line></Line>
        <Or bg="blanco">OR</Or>
      </Center>
      <ButtonStandard margin="1" color="azul">
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep1;
