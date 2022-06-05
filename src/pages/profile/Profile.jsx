import React from "react";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import ProfileInfoHeader from "../../components/ProfileInfoHeader";
import LinksProfile from "../../components/LinksProfile";

const Profile = () => {
  return (
    <>
   
      <HeaderViews title="Mi Perfil" />
      <ProfileInfoHeader />
      <LinksProfile />
      <Footer />
    </>
  );
};

export default Profile;
