import Footer from "../../components/Footer";
import HeaderViews from "../../components/HeaderViews";
import { BlueTitle, SupportCardText, SupportCardTitle } from "../../styles/views/Support";


function Servicios(){
return(
  <>
  <HeaderViews title="PQR SERVICIOS" />
    <BlueTitle>1.1 FAQS RELACIONADO CON MIS SERVICIOS</BlueTitle>

    <SupportCardTitle>
      <p>1.1.1 ¿Cómo puedo programar/cancelar o reagendar un servicio en 
          Domesticapp?</p>
    </SupportCardTitle>
    <SupportCardText>
      <p>Descarga el aplicativo móvil de Domesticapp para Colombia, España
         y Canadá y accede al manejo de tus servicios en tiempo real. Conoce 
         a tus asistentes, califícalos y goza de múltiples beneficios.</p>
    </SupportCardText>
    <SupportCardTitle>
      <p>1.1.2 ¿Qué garantías tengo cuando contrato un servicio con Domesticapp?</p>
    </SupportCardTitle>
    <SupportCardText>
      <p>TODOS tus servicios están protegidos por daños a terceros con el fin de
         evitar cualquier altercado, además, todos nuestros asistentes cuentan con
         certificaciones especializadas para sus labores.</p>
    </SupportCardText>
    <Footer />
  </>
  )
}

export default Servicios;