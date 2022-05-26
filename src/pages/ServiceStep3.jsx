import React from "react";
import HeaderViews from "../components/HeaderViews";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Footer from "../components/Footer";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";

const ServiceStep3 = () => {
  return (
    <BasicContainer>
      <HeaderViews title="recurrencia" />
      <ContainerInput>
        <P>Repetir cita</P>
        <StyleSelect>
          <option value="">Seleccione si desea repetir</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </StyleSelect>
      </ContainerInput>
      <ButtonStandard color="azul" marginT="4">
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep3;
