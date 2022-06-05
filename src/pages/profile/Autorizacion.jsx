import Footer from "../../components/Footer";
import HeaderViews from "../../components/HeaderViews";
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
import { TermsContainer } from "../../styles/views/Profile";
import styled from "styled-components";

const P = styled.p`
  text-align: justify;
`;

function Tratamiento() {
  return (
    <>
    <HeaderViews title="Autorización y Tratamiento" />
    <TermsContainer>
      <h3>GARANTÍA Y PROTECCIÓN DE DATOS</h3>
      </TermsContainer>
      <TermsContainer>
        <P>{AutGar1}</P>
        <P>{AutGar2}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>CALIDAD DE LOS DATOS</h3>
      </TermsContainer>
      <TermsContainer>
        <P>{AutCal}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>
        EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y
        OPOSICIÓN
      </h3></TermsContainer>
      <TermsContainer>
        <P>{AutEje}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>MEDIDAS DE SEGURIDAD</h3></TermsContainer>
      <TermsContainer>
        <P>{AutMed}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD</h3></TermsContainer>
      <TermsContainer>
        <P>{AutMod1}</P>
      </TermsContainer>
      <TermsContainer>
      <h2>VARIOS</h2>
      </TermsContainer>
      <TermsContainer>
      <h3>MODIFICACIONES</h3></TermsContainer>
      <TermsContainer>
        <P>{AutMod2}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>MENORES DE EDAD</h3></TermsContainer>
      <TermsContainer>
        <P>{AutMen}</P>
      </TermsContainer>
      <TermsContainer>
      <h3>LEY Y JURISDICCIÓN</h3></TermsContainer>
      <TermsContainer>
        <P>{AutLey}</P>
      </TermsContainer>
      <Footer />
    </>
  );
}

export default Tratamiento;
