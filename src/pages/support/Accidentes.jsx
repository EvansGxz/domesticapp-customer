import { ButtonStandard } from "../../styles/buttons";


function Accidentes(){
  return(
    <>
      <p>Recuerda que los reportes deben de realizarse dentro de las primeras 48hrs.</p>
  
      <h2>Accidente, Objeto Dañado</h2>

      <p>Adjunta una Imagen o Video de el percance, u objeto dañado, asi como una descripción
       de la eventualidad.</p>

      <ButtonStandard color="azul">Ver Poliza de Seguros</ButtonStandard>
      <ButtonStandard color="azul">Ver Seguridad Laboral Empleados</ButtonStandard>

      <h2>Descripción</h2>

      <input type="text"
              placeholder="Escribe aquí la descripción del evento que ocasiono el accidente,
                          daño o situación..." />
      <h2>Archivos</h2>
      <input multiple="true" type="file"/>
      <ButtonStandard color="azul">Enviar</ButtonStandard>
      <ButtonStandard color="azul">Conecta con Soporte</ButtonStandard>
    </>
    )
  }
  
  export default Accidentes;