import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { azul, gris } from "../styles/colors";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;
`;
const Navegacion = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
`;

const Title = styled.p`
  color: ${gris};
  text-transform: uppercase;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 2rem;
`;

const HeaderViews = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Navegacion>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          style={{ color: azul }}
          size="2x"
          onClick={() => navigate(-1)}
        />
        <Title>{title ? title : ""}</Title>
      </Navegacion>
    </Container>
  );
};

export default HeaderViews;
