import React from "react";
import { frecuenciaServicios } from "../constantes/frecuenciaServicio";
import {
  ContainerInput,
  P,
  StyleSelect,
  StyleInput,
} from "../styles/views/StepServices";

const Repetir = () => {
  return (
    <>
      <ContainerInput>
        <P>Frecuencia</P>
        <StyleSelect>
          <option value="">Seleccionar frecuencia</option>
          {frecuenciaServicios.map((frecuencia) => (
            <option key={frecuencia.id} value={frecuencia.frecuencia}>
              {frecuencia.frecuencia}
            </option>
          ))}
        </StyleSelect>
      </ContainerInput>
      <ContainerInput>
        <P>Fecha limite</P>
        <StyleInput type="date" />
      </ContainerInput>
    </>
  );
};

export default Repetir;
