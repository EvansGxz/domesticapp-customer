import React from "react";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import {
  Input,
  Label,
  ContainerInput,
  Form,
  ContainerInputImg,
  LabelImg,
  InputImg,
} from "../styles/views/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  return (
    <BasicContainer>
      <Form>
        <ContainerInputImg>
          <LabelImg>
            Agregar Imagen
            <FontAwesomeIcon
              icon={faCamera}
              size="1x"
              style={{ margin: "0 5px" }}
            />
            <InputImg type="file" />
          </LabelImg>
        </ContainerInputImg>
        <ContainerInput>
          <Label>Nombre Completo</Label>
          <Input type="text" placeholder="Nombre" />
        </ContainerInput>
        <ContainerInput>
          <Label>Correo electronico</Label>
          <Input type="text" placeholder="Correo electronico" />
        </ContainerInput>
        <ContainerInput>
          <Label>CC/NIT</Label>
          <Input type="text" placeholder="CC/NIT" />
        </ContainerInput>
        <ContainerInput>
          <Label>Fecha de Nacimiento</Label>
          <Input type="date" />
        </ContainerInput>
        <ContainerInput>
          <Label>Compañia</Label>
          <Input type="text" placeholder="Compañia" />
        </ContainerInput>
        <ContainerInput>
          <Label>Código Referido</Label>
          <Input type="text" placeholder="Código Referido" />
        </ContainerInput>
        <ButtonStandard type="submit" color="azul">
          Continuar
        </ButtonStandard>
      </Form>
    </BasicContainer>
  );
};

export default Signup;
