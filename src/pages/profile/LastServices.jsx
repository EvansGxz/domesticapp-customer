import React from "react";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";

const LastServices = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Tus Ultimos Servicios" />
      <p>
        Tus últimos Servicios se mostrarán aqui, asi como tu Servicio Activo.
      </p>
      <Footer />
    </BasicContainer>
  );
};

export default LastServices;
