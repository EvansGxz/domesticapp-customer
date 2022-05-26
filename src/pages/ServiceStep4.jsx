import React from "react";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import Detalles from "../components/Detalles";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";

const ServiceStep4 = () => {
  return (
    <BasicContainer>
      <HeaderViews title="detalles" />
      <Detalles />
      <ButtonStandard color="azul" marginB="5">
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep4;
