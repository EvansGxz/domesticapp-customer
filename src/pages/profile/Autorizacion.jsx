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

function Tratamiento() {
  return (
    <>
    <HeaderViews title="Autorización y Tratamiento" />
    <TermsContainer>
      <h3>GARANTÍA Y PROTECCIÓN DE DATOS</h3>
      </TermsContainer>
      <TermsContainer>
        <p>{AutGar1}</p>
        <p>{AutGar2}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>CALIDAD DE LOS DATOS</h3>
      </TermsContainer>
      <TermsContainer>
        <p>{AutCal}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>
        EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y
        OPOSICIÓN
      </h3></TermsContainer>
      <TermsContainer>
        <p>{AutEje}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>MEDIDAS DE SEGURIDAD</h3></TermsContainer>
      <TermsContainer>
        <p>{AutMed}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD</h3></TermsContainer>
      <TermsContainer>
        <p>{AutMod1}</p>
      </TermsContainer>
      <TermsContainer>
      <h2>VARIOS</h2>
      </TermsContainer>
      <TermsContainer>
      <h3>MODIFICACIONES</h3></TermsContainer>
      <TermsContainer>
        <p>{AutMod2}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>MENORES DE EDAD</h3></TermsContainer>
      <TermsContainer>
        <p>{AutMen}</p>
      </TermsContainer>
      <TermsContainer>
      <h3>LEY Y JURISDICCIÓN</h3></TermsContainer>
      <TermsContainer>
        <p>{AutLey}</p>
      </TermsContainer>
      <Footer />
    </>
  );
}

export default Tratamiento;
