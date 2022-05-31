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
import Notificaciones from '../pages/support/Notificaciones'
import Slider from '../pages/Slider'
import { GlobalStyle } from "../styles/GlobalStyle";
import Direcciones from "../pages/profile/Direcciones";
import ProfileForm from "../pages/profile/Editar";
import Cupons from "../pages/profile/Cupons";
import History from "../pages/profile/History";
import ProfileEmployee from "../pages/Empleado";
import Notification from "../pages/profile/Notifications";

function Authenticated() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <GlobalStyle />
      <Routes>
        {user.full_name ? (
          <>
             <Route path="//introduction" element={<Slider />} />
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route index element={<Navigate to="home" />} />

            <Route path="/verification" element={<h2>Verify</h2>} />
           
            <Route
              path="/employee_profile"
              element={<ProfileEmployee />}
            />
            <Route path="/select_service/:id" element={<ServiceStep1 />} />
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
            <Route path="/process_payment" element={"<Payment />"} />
            <Route path="/services" element={"<ServicePage />"} />
            <Route path="/history" element={<History />} />
            <Route path="/cupons" element={<Cupons />} />
            <Route path="/profile_employee" element={<ProfileForm />} />
            <Route path="/address" element={<Direcciones />} />
            <Route path="/notification" element={<Notification />} />
          </>
        ) : (
          <Route path="/*" element={"<ProfileForm />"} />
        )}
      </Routes>
    </>
  );
}
export default Authenticated;
