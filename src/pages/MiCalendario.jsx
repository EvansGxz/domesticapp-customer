import React from "react";
import { Header } from "../components/HeaderViews";
import Footer from "../components/Footer";
import { BasicContainer } from "../styles/containers";
import MiCalendar from "../components/Calendario";

const MiCalendario = () => {
  return(
    <BasicContainer>
      <Header title="Mi Calendario" />
      <MiCalendar />
      <Footer />
    </BasicContainer>
  )
};

export default MiCalendario;
