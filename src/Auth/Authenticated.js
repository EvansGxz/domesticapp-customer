import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Support from "../pages/support/Support";
import Faq from "../pages/support/Faq";
import Calendar from "../pages/Calendar";
import ServiceStep1 from "../pages/ServiceStep1";
import ServiceStep2 from "../pages/ServiceStep2";
import ServiceStep3 from "../pages/ServiceStep3";
import ServiceStep4 from "../pages/ServiceStep4";
import Preguntas from "../pages/support/Preguntas";
import Accidentes from "../pages/support/Accidentes";
import Profile from "../pages/profile/Profile";
import Notificaciones from "../pages/support/Notificaciones";
import Slider from "../pages/Slider";
import { GlobalStyle } from "../styles/GlobalStyle";
import Direcciones from "../pages/profile/Direcciones";
import ProfileForm from "../pages/profile/Editar";
import Cupons from "../pages/profile/Cupons";
import History from "../pages/profile/History";
import ProfileEmployee from "../pages/Empleado";
import LastServices from "../pages/profile/LastServices";
import Terminos from "../pages/profile/Terminos";
import Politicas from "../pages/profile/Politicas";
import Autorizacion from "../pages/profile/Autorizacion";

import Payment from "../pages/Payment";
import Process from "../pages/Processed";
import MiCalendario from "../pages/MiCalendario";
import Equipo from "../pages/Equipo";
import Servicios from "../pages/support/Servicios";
import Empleados from "../pages/support/Empleados";
import Tratamiento from "../pages/profile/Autorizacion";

function Authenticated() {
  const { user } = useAuth();
  return (
    <>
      <GlobalStyle />
      <Routes>
        {user.full_name ? (
          <>
            <Route path="/introduction" element={<Slider />} />
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route index element={<Navigate to="home" />} />
            <Route path="/" element={<Home />} />
            <Route path="/verification" element={<h2>Verify</h2>} />

            <Route path="/employee_profile" element={<ProfileEmployee />} />
            <Route path="/select_service/:id" element={<ServiceStep1 />} />

            <Route path="/employee_profile" element={<ProfileEmployee />} />
            <Route path="/select_service/:id" element={<ServiceStep1 />} />
            <Route path="/employee_profile" element={<ProfileEmployee />} />

            <Route path="/select_service" element={<ServiceStep1 />} />
            <Route path="/select_service2" element={<ServiceStep2 />} />
            <Route path="/select_service3" element={<ServiceStep3 />} />
            <Route path="/select_service4" element={<ServiceStep4 />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/preguntas/:id" element={<Preguntas />} />
            <Route path="/accidentes" element={<Accidentes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notificaciones />} />
            <Route path="/last_services" element={<LastServices />} />
            <Route path="/cupons" element={<Cupons />} />
            <Route path="/address" element={<Direcciones />} />
            <Route path="/process_payment" element={<Process />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile_employee" element={<Empleados />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/mi_calendario" element={<MiCalendario />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/support/servicios" element={<Servicios />} />
            <Route path="/editar" element={<ProfileForm />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/tratamientos" element={<Tratamiento />} />
          </>
        ) : (
          <Route path="/*" element={<ProfileForm />} />
        )}
      </Routes>
    </>
  );
}
export default Authenticated;
