import React from "react";
import { faqText } from "../../constantes/paragraph";
import { Preguntas } from "../../constantes/preguntasF";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";
import {
  SupportContainer,
  Title,
  NewLink,
  Info,
  ContainerIcon,
} from "../../styles/views/Support";

const Faq = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Preguntas frecuentes" />
      <SupportContainer>
        <p>{faqText}</p>
        <Title>Tengo dudas con:</Title>
        <div>
          {Preguntas.map((pregunta) => (
            <NewLink key={pregunta.id} to={`${pregunta.ruta}/${pregunta.id}`}>
              <ContainerIcon>
                <img src={pregunta.img} alt={pregunta.nombre} />
                <Info>{pregunta.nombre}</Info>
              </ContainerIcon>
            </NewLink>
          ))}
        </div>
      </SupportContainer>
      <Footer />
    </BasicContainer>
  );
};

export default Faq;
