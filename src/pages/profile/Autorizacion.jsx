import { AutCal, AutEje, AutGar1, AutGar2, AutLey, AutMed, AutMen, AutMod1, AutMod2 } from "../../constantes/paragraph";

function Politicas(){
  return(
    <>
      
      <p>GARANTÍA Y PROTECCIÓN DE DATOS</p>
      <div>
        <p>{AutGar1}</p>
        <p>{AutGar2}</p>
      </div>

      <p>CALIDAD DE LOS DATOS</p>
      <div>
        <p>{AutCal}</p>
      </div>
      <p>EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN,
      CANCELACIÓN Y OPOSICIÓN</p>
      <div>
        <p>{AutEje}</p>
      </div>
      <p>MEDIDAS DE SEGURIDAD</p>
      <div>
        <p>{AutMed}</p>
      </div>
      <p>MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD</p>
      <div>
        <p>{AutMod1}</p>
      </div>
      <h1>VARIOS</h1>
  
      <p>MODIFICACIONES</p>
      <div>
        <p>{AutMod2}</p>
      </div>
      <p>MENORES DE EDAD</p>
      <div>
        <p>{AutMen}</p>
      </div>
      <p>LEY Y JURISDICCIÓN</p>
      <div>
        <p>{AutLey}</p>
      </div>
    </>
    )
  }
  
  export default Politicas;