import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderViews from "../components/HeaderViews";
import CalendarPicker from "../components/CalendarPicker";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Footer from "../components/Footer";
import { ContainerInput, P, StyleInput } from "../styles/views/StepServices";

const ServiceStep2 = () => {
  const navigate = useNavigate();
  return (
    <BasicContainer>
      <HeaderViews title="apuntalo en mi agenda" />
      <CalendarPicker />
      <ContainerInput>
        <P>Hora de inicio</P>
        <StyleInput type="time" />
      </ContainerInput>
      <ButtonStandard
        color="azul"
        marginB="5"
        onClick={() => navigate("/select_service3")}
      >
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep2;
