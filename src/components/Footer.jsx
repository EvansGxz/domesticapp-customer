import React from "react";
import { Link } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import config from "../assets/config.svg";
import contract from "../assets/contract.svg";
import home from "../assets/home.svg";
import support from "../assets/support.svg";
import styled from "styled-components";
import { blanco } from "../styles/colors";

const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 8%;
  background-color: ${blanco};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 0px 1px 25px -15px #1a1b15;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <Link to="/home">
        <img src={home} alt="home" />
      </Link>
      <Link to="/config">
        <img src={config} alt="config" />
      </Link>
      <Link to="/calendar">
        <img src={calendar} alt="calendar" />
      </Link>
      <Link to="/support">
        <img src={support} alt="support" />
      </Link>
      <Link to="/profile">
        <img src={contract} alt="contract" />
      </Link>
    </ContainerFooter>
  );
};

export default Footer;
