import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Repetir from "../components/Repetir";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";
import { cart } from "./ServiceStep1";

const ServiceStep3 = () => {
  const navigate = useNavigate();
  const [repetir, setRepetir] = useState("");

  cart.splice(3, 1);
  function rep(){
    cart.push(repetir)
    navigate("/select_service4")
  }
  return (
    <BasicContainer>
      <HeaderViews title="recurrencia" />
      <ContainerInput>
        <P>Repetir cita</P>
        <StyleSelect onChange={(e) => setRepetir(e.target.value)}>
          <option value="">Seleccione si desea repetir</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </StyleSelect>
      </ContainerInput>
      {repetir === "si" ? <Repetir /> : null}
      <ButtonStandard
        color="azul"
        marginT="4"
        onClick={() => rep()}
      >
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep3;
