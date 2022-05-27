import React from "react";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import ProfileInfoHeader from "../../components/ProfileInfoHeader";
import { BasicContainer } from "../../styles/containers";

const Profile = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Mi Perfil" />
      <ProfileInfoHeader />
      <Footer />
    </BasicContainer>
  );
};

export default Profile;
