import React from "react";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";
import Notification from "../profile/Notifications";

const Notificaciones = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Notificaciones" />
        <Notification />
      <Footer />
    </BasicContainer>
  );
};

export default Notificaciones;
