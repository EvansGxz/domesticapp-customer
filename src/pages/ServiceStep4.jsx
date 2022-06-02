import React from "react";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import Detalles from "../components/Detalles";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import GoogleMapp, { direccion } from "../components/google-map";
import { a } from "../components/Googe-routes";
import { cart } from "./ServiceStep1";
import { useAuth } from "../context/auth-context";
import { createOrderDetail } from "../services/order-details-services";

const ServiceStep4 = () => {
  const { user } = useAuth();
  cart.splice(5, 1);
  function pay(){
    cart.push(a.employee.id)
    const address =  cart[4];
    const calendar =  cart[2];
    const CategoryID =  cart[0];
    const jornada =  cart[1];
    const alimento =  cart[5];
    const employee = cart[5];
   
    const getOrder = { category_id: CategoryID, employee_id: employee, customer_id: user.id, workday: jornada,
                       address: address, start_date: calendar, supply_food: alimento };
    createOrderDetail(getOrder).then(() =>{
      console.log("Order creada")
    });
    console.log(cart)
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
