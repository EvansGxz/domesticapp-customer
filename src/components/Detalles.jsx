import React from "react";
import { Form, Input } from "../styles/views/Login";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";
import GoogleMapp from "./google-map";


const Detalles = () => {
  return (
    <Form>
      <Input
        id="email"
        label="Correo de Notificación"
        type="email"
        placeholder="example@mail.com"
      />
      <ContainerInput>
        <P color="gris">CC/NIT</P>
        <StyleSelect>
          <option value="">Seleccione</option>
          <option value="CC">CC</option>
          <option value="NIT">NIT</option>
        </StyleSelect>
      </ContainerInput>
      <Input id="tel" label="Celular" type="tel" placeholder="Celular" />
      <Input
        id="document"
        label="No. De Documento"
        type="number"
        placeholder="No. De Documento"
      />
      <ContainerInput>
        <P color="gris">Suministrar alimento</P>
        <StyleSelect>
          <option value="">Seleccione</option>
          <option value="CC">CC</option>
          <option value="NIT">NIT</option>
        </StyleSelect>
      </ContainerInput>
      
    </Form>
      
  );
};

export default Detalles;
