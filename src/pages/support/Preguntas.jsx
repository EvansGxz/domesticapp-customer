import React from "react";
import { useParams } from "react-router-dom";
import { CategoriasPreguntas } from "../../constantes/preguntasF";
import { BasicContainer } from "../../styles/containers";
import HeaderViews from "../../components/HeaderViews";
import Pregunta from "../../components/Pregunta";
import Footer from "../../components/Footer";
import { azul } from "../../styles/colors";
import styled from "styled-components";

const Legend = styled.p`
  color: ${azul};
  text-align: center;
  margin: 1rem 0;
`;
const ContainerPregunta = styled.div`
  width: 100%;
  margin: 2rem 0 15% 0;
`;

const Preguntas = () => {
  const { id } = useParams();

  return CategoriasPreguntas.map((categoria) =>
    categoria.id === Number(id) ? (
      <BasicContainer key={categoria.id}>
        <HeaderViews title={categoria.title} />
        <Legend>{categoria.legend}</Legend>
        <ContainerPregunta>
          {categoria.preguntas.map((pregunta) => (
            <Pregunta key={pregunta.id} pregunta={pregunta} />
          ))}
        </ContainerPregunta>
        <Footer />
      </BasicContainer>
    ) : null
  );
};

export default Preguntas;
