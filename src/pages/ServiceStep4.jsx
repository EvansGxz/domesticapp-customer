import React from "react";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import Detalles from "../components/Detalles";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import GoogleMapp from "../components/google-map";
import CalculateRoute, { a } from "../components/Googe-routes";

const ServiceStep4 = () => {
  function pay(){
   console.log(a)
  }
  return (
    <BasicContainer>
      <HeaderViews title="detalles" />
      <Detalles />
      <GoogleMapp />
      <ButtonStandard color="azul" marginB="5" onClick={pay}>
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep4;
