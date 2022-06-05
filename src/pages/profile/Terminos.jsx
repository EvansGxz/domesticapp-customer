import Footer from "../../components/Footer";
import HeaderViews from "../../components/HeaderViews";
import { termsText1, termsText10, termsText11, termsText12, termsText13, termsText14, termsText15, termsText16, termsText17, termsText18, termsText2, termsText3, termsText31, termsText4, termsText5, termsText6, termsText7, termsText8, termsText8_1, termsText8_2, termsText8_3, termsText8_4, termsText8_5, termsText8_6, termsText8_7, termsText8_8, termsText8_9 } from "../../constantes/paragraph";
import { TermsContainer } from "../../styles/views/Profile";
import { Body } from "../../styles/views/Support";


function Terminos(){
  return(
    <>
    <HeaderViews title="Terminos y Condiciones" />
    <TermsContainer>
      <h3>1 - CONDICIONES GENERALES DE USO</h3>
    </TermsContainer>
      <TermsContainer>
        <Body>{termsText1}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText2}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText3}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText31}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText4}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText5}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText6}</Body>
      </TermsContainer>

      <TermsContainer>
      <h3>2 - USO DE LA APLICACIÓN MÓVIL Y PORTAL WEB Y SUS SERVICIOS</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText7}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText8}</Body>
         <TermsContainer>
          <Body>{termsText8_1}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_2}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_3}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_4}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_5}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_6}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_7}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_8}</Body>
        </TermsContainer>
        <TermsContainer>
          <Body>{termsText8_9}</Body>
        </TermsContainer>
      </TermsContainer>
      <TermsContainer>
      <h3>3 - PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText10}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText11}</Body>
      </TermsContainer>
      <TermsContainer>
      <h3>4 - EXCLUSION DE GARANTÍAS. RESPONSABILIDAD</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText12}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText13}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText14}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText15}</Body>
      </TermsContainer>
      <TermsContainer>
      <h3>5 - CONDUCTA DE LOS USUARIOS</h3>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText16}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText17}</Body>
      </TermsContainer>
      <TermsContainer>
        <Body>{termsText18}</Body>
      </TermsContainer>
      <Footer />
    </>
    )
  }
  
  export default Terminos;