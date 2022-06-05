import {
  termsText1,
  termsText10,
  termsText11,
  termsText12,
  termsText13,
  termsText14,
  termsText15,
  termsText16,
  termsText17,
  termsText18,
  termsText2,
  termsText3,
  termsText31,
  termsText4,
  termsText5,
  termsText6,
  termsText7,
  termsText8,
  termsText8_1,
  termsText8_2,
  termsText8_3,
  termsText8_4,
  termsText8_5,
  termsText8_6,
  termsText8_7,
  termsText8_8,
  termsText8_9,
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

function Terminos() {
  return (
    <BasicContainer>
      <HeaderViews title="Terminos y Condiciones" />
      <Container>
        <H3>1 - CONDICIONES GENERALES DE USO</H3>

        <ContainerInfo>
          <P>{termsText1}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText2}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText3}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText31}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText4}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText5}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText6}</P>
        </ContainerInfo>

        <H3>2 - USO DE LA APLICACIÓN MÓVIL Y PORTAL WEB Y SUS SERVICIOS</H3>
        <ContainerInfo>
          <P>{termsText7}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText8}</P>
          <ContainerInfo>
            <P>{termsText8_1}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_2}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_3}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_4}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_5}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_6}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_7}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_8}</P>
          </ContainerInfo>
          <ContainerInfo>
            <P>{termsText8_9}</P>
          </ContainerInfo>
        </ContainerInfo>

        <H3>3 - PROPIEDAD INTELECTUAL E INDUSTRIAL</H3>
        <ContainerInfo>
          <P>{termsText10}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText11}</P>
        </ContainerInfo>

        <H3>4 - EXCLUSION DE GARANTÍAS. RESPONSABILIDAD</H3>
        <ContainerInfo>
          <P>{termsText12}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText13}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText14}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText15}</P>
        </ContainerInfo>

        <H3>5 - CONDUCTA DE LOS USUARIOS</H3>
        <ContainerInfo>
          <P>{termsText16}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText17}</P>
        </ContainerInfo>
        <ContainerInfo>
          <P>{termsText18}</P>
        </ContainerInfo>
      </Container>
      <Footer />
    </BasicContainer>
  );
}

export default Terminos;
