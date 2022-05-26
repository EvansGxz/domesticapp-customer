import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto 3rem auto;
`;

const ContainerPR = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1rem;
`;

const Ptitle = styled.h3`
  text-align: center;
`;

const Pregunta = ({ pregunta }) => {
  return (
    <Container>
      <ContainerPR>
        <Ptitle>{pregunta.pregunta}</Ptitle>
      </ContainerPR>
      <ContainerPR>
        <p>{pregunta.respuesta}</p>
      </ContainerPR>
    </Container>
  );
};

export default Pregunta;
