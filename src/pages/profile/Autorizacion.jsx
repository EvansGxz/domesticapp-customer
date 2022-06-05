import {
  AutCal,
  AutEje,
  AutGar1,
  AutGar2,
  AutLey,
  AutMed,
  AutMen,
  AutMod1,
  AutMod2,
} from "../../constantes/paragraph";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 15%;
`;

const ContainerInfo = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 1.5rem;
`;

const P = styled.p`
  text-align: justify;
`;
const H3 = styled.h3`
  text-align: center;
`;

function Politicas() {
  return (
    <BasicContainer>
      <HeaderViews title="Autorización y tratamientos" />
      <Container>
        <H3>GARANTÍA Y PROTECCIÓN DE DATOS</H3>
        <ContainerInfo>
          <P>{AutGar1}</P>
          <P>{AutGar2}</P>
        </ContainerInfo>

        <H3>CALIDAD DE LOS DATOS</H3>
        <ContainerInfo>
          <P>{AutCal}</P>
        </ContainerInfo>
        <H3>
          EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y
          OPOSICIÓN
        </H3>
        <ContainerInfo>
          <P>{AutEje}</P>
        </ContainerInfo>
        <H3>MEDIDAS DE SEGURIDAD</H3>
        <ContainerInfo>
          <P>{AutMed}</P>
        </ContainerInfo>
        <H3>MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD</H3>
        <ContainerInfo>
          <P>{AutMod1}</P>
        </ContainerInfo>

        <H3>MODIFICACIONES</H3>
        <ContainerInfo>
          <P>{AutMod2}</P>
        </ContainerInfo>
        <H3>MENORES DE EDAD</H3>
        <ContainerInfo>
          <P>{AutMen}</P>
        </ContainerInfo>
        <H3>LEY Y JURISDICCIÓN</H3>
        <ContainerInfo>
          <P>{AutLey}</P>
        </ContainerInfo>
      </Container>
      <Footer />
    </BasicContainer>
  );
}

export default Politicas;
