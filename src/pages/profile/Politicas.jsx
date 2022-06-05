import Footer from "../../components/Footer";
import HeaderViews from "../../components/HeaderViews";
import { Politica, TermsContainer } from "../../styles/views/Profile";
import { Body } from "../../styles/views/Support";

function Politicas(){
  return(
    <>
    <HeaderViews title="Politica de Privacidad" />
    <TermsContainer>
      <Politica>DOMESTICAPP desea poner en conocimiento de los usuarios y clientes de
        la/s aplicación/es y servicios, la política llevada a cabo respecto al
        tratamiento de todos los datos de carácter personal que por la utilización
        de las funciones de la/s aplicación/es se faciliten a la empresa.</Politica>
      </TermsContainer>
      <TermsContainer>
      <h3>IDENTIFICACIÓN DEL RESPONSABLE DE FICHERO</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>DOMESTICAPP S.A.S. (en adelante DOMESTICAPP) con domicilio social en
          Medellín Colombia, dirección Calle 9 sur #79C-151 e inscrito en la Cámara de
          Comercio de Medellín., informa a los usuarios y clientes de la aplicación de la
          existencia de un fichero automatizado de datos personales cuyo responsable es
          DOMESTICAPP.</Body>
      </TermsContainer>
      <TermsContainer>
      <h3>FINALIDAD DEL FICHERO</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>Todos los datos que se solicitan a los usuarios y clientes a través de la aplicación
          para dispositivos móviles y el portal web serán necesarios para prestar el
          servicio objeto del servicio en virtud del cual se ha procedido a la descarga e
          instalación de la/s aplicación/es en los correspondientes dispositivos.</Body>
      </TermsContainer>
      <TermsContainer>
      <h3>CONSENTIMIENTO</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>La utilización de la aplicación y portal web dará lugar al tratamiento de datos
          de carácter personal que DOMESTICAPP, en su caso, llevará a cabo de acuerdo
          con las normas y procedimientos internos establecidos al efecto, que son
          conocidos por los clientes y usuarios y autorizados por éstos. DOMESTICAPP, al
          amparo de lo previsto en el artículo 15 de la Constitución Política de Colombia
          de 1991 y Modificado por Acto Legislativo 2/2003, de Protección de Datos de
          Carácter Personal, podrá subcontratar con otras empresas o profesionales la
          ejecución material de todas o alguna de las prestaciones de servicios sin que en
          ningún caso tal comunicación constituya una cesión de datos, garantizando a
          los clientes y usuarios de la aplicación que los datos facilitados no se aplicarán
          ni utilizarán con un fin distinto al establecido.</Body>
      </TermsContainer>
      <Footer />
    </>
    )
  }
  
  export default Politicas;