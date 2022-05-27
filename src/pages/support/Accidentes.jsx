import React from "react";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";
import { ButtonStandard } from "../../styles/buttons";
import {
  Container,
  Title,
  ContainerInfo,
  PInfo,
  Textarea,
  ContainerInputM,
  InputMultiple,
  Label
} from "../../styles/views/Accidentes";

const Accidentes = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Daños y Accidentes" />
      <Container>
        <ContainerInfo>
          <p>
            Recuerda que los reportes deben de realizarse dentro de las primeras
            48hrs.
          </p>
          <Title>Accidente, Objeto Dañado</Title>
          <PInfo>
            Adjunta una Imagen o Video de el percance, u objeto dañado, asi como
            una descripción de la eventualidad.
          </PInfo>
        </ContainerInfo>

        <ButtonStandard color="azul" marginT="2">
          Ver Poliza de Seguros
        </ButtonStandard>
        <ButtonStandard color="azul">
          Ver Seguridad Laboral Empleados
        </ButtonStandard>
        <Title>Descripción</Title>
        <Textarea
          placeholder="Escribe aquí la descripción del evento que ocasiono el accidente,
                          daño o situación..."
        />
        <Title>Archivos</Title>
        <ContainerInputM>
          <Label>Adjuntar Archivo</Label>
          <InputMultiple multiple={true} type="file" />
        </ContainerInputM>
        <ButtonStandard color="azul">Enviar</ButtonStandard>
        <ButtonStandard color="azul">Conecta con Soporte</ButtonStandard>
      </Container>
      <Footer />
    </BasicContainer>
  );
};

export default Accidentes;
