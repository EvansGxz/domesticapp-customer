import * as React from "react";
import { Routes, Route } from "react-router-dom";


import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Support from "../pages/support/Support";
import { GlobalStyle } from "../styles/GlobalStyle";


function Authenticated() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
    <GlobalStyle />

        <Routes>
          {user.full_name ? (
            <>
              <Route path="/*" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route index element={<Navigate to="home" />} />

              <Route path="/verification" element={<h2>Verify</h2>} />
              <Route path="/introduction" element={<h2> Introduction</h2>} />
              <Route
                path="/employee_services"
                element={"<EmployeeServicePage />"}
              />
              <Route path="/select_service" element={"<ServiceStep1 />"} />
              <Route path="/select_service2" element={"<ServiceStep2 />"} />
              <Route path="/select_service3" element={"<ServiceStep3 />"} />
              <Route path="/select_service4" element={"<ServiceStep4 />"} />
              <Route path="/process_payment" element={"<Payment />"} />
              <Route path="/services" element={"<ServicePage />"} />
              <Route path="/addService" element={"<AddService />"} />
              <Route path="/history" element={"<History />"} />
              <Route path="/cupons" element={"<Cupons />"} />
              <Route path="/calendar" element={"<Calendar />"} />
              <Route path="/notifications" element={"<Notifications />"} />
              <Route path="/support" element={<Support />} />
              <Route path="/profile" element={"<Profile />"} />
              <Route path="/profile_employee" element={"<ProfileEmployee />"} />
            </>
          ) : (
            <Route path="/*" element={"<ProfileForm />"} />
          )}
        </Routes>
    </>
  );
}
export default Authenticated;
