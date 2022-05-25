import React from "react";
import cleanHouse from "../assets/cleanHouse.svg";
import styled from "styled-components";
import { gris } from "../styles/colors";

const Container = styled.div`
  width: 100%;
  margin: 25% auto 3rem auto;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  padding-left: 10px;
`;
const Title = styled.h2`
  max-width: 80%;
  position: absolute;
  padding-left: 10px;
  color: ${gris};
`;

const Hero = () => {
  return (
    <Container>
      <Title>Ambientes limpios, personas felices.</Title>
      <Img src={cleanHouse} alt="clean-house" />
    </Container>
  );
};

export default Hero;
