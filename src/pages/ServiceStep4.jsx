import React from "react";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import Detalles, { Alimento } from "../components/Detalles";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import GoogleMapp from "../components/google-map";
import { a } from "../components/Googe-routes";
import { cart } from "./ServiceStep1";
import { useNavigate } from "react-router-dom";

const ServiceStep4 = () => {
  const navigate = useNavigate();
  cart.splice(5, 1);
  function pay(){
    console.log(a);
    cart.push(a.employee.id)
    cart.push(Alimento)
    console.log(cart[5]);
    localStorage.setItem("Category", cart[0]);
    localStorage.setItem("Jornada", cart[1]);
    localStorage.setItem("Calendar", cart[2]);
    localStorage.setItem("Repetir", cart[3]);
    localStorage.setItem("Alimento", cart[5]);
    localStorage.setItem("Empleado", cart[4]);

    navigate("/payment")
  }
  return (
    <BasicContainer>
      <HeaderViews title="detalles" />
      <Detalles />
      <GoogleMapp />
      <ButtonStandard color="azul" marginB="6" onClick={pay}>
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep4;
