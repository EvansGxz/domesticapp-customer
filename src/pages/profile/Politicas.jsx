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
      <HeaderViews title="Politica de Privacidad" />
      <Container>
        <P style={{ margin: "1rem", fontWeight: "500" }}>
          DOMESTICAPP desea poner en conocimiento de los usuarios y clientes de
          la/s aplicación/es y servicios, la política llevada a cabo respecto al
          tratamiento de todos los datos de carácter personal que por la
          utilización de las funciones de la/s aplicación/es se faciliten a la
          empresa.
        </P>

        <H3>IDENTIFICACIÓN DEL RESPONSABLE DE FICHERO</H3>
        <ContainerInfo>
          <P>
            DOMESTICAPP S.A.S. (en adelante DOMESTICAPP) con domicilio social en
            Medellín Colombia, dirección Calle 9 sur #79C-151 e inscrito en la
            Cámara de Comercio de Medellín., informa a los usuarios y clientes
            de la aplicación de la existencia de un fichero automatizado de
            datos personales cuyo responsable es DOMESTICAPP.
          </P>
        </ContainerInfo>

        <H3>FINALIDAD DEL FICHERO</H3>
        <ContainerInfo>
          <P>
            Todos los datos que se solicitan a los usuarios y clientes a través
            de la aplicación para dispositivos móviles y el portal web serán
            necesarios para prestar el servicio objeto del servicio en virtud
            del cual se ha procedido a la descarga e instalación de la/s
            aplicación/es en los correspondientes dispositivos.
          </P>
        </ContainerInfo>

        <H3>CONSENTIMIENTO</H3>
        <ContainerInfo>
          <P>
            La utilización de la aplicación y portal web dará lugar al
            tratamiento de datos de carácter personal que DOMESTICAPP, en su
            caso, llevará a cabo de acuerdo con las normas y procedimientos
            internos establecidos al efecto, que son conocidos por los clientes
            y usuarios y autorizados por éstos. DOMESTICAPP, al amparo de lo
            previsto en el artículo 15 de la Constitución Política de Colombia
            de 1991 y Modificado por Acto Legislativo 2/2003, de Protección de
            Datos de Carácter Personal, podrá subcontratar con otras empresas o
            profesionales la ejecución material de todas o alguna de las
            prestaciones de servicios sin que en ningún caso tal comunicación
            constituya una cesión de datos, garantizando a los clientes y
            usuarios de la aplicación que los datos facilitados no se aplicarán
            ni utilizarán con un fin distinto al establecido.
          </P>
        </ContainerInfo>
      </Container>
      <Footer />
    </BasicContainer>
  );
}

export default Politicas;
