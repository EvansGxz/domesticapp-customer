import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import {
  Input,
  Label,
  ContainerInput,
  Form,
  ContainerInputImg,
  Img,
  Round,
  InputImg,
} from "../styles/views/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ImgenUser from "../assets/IconLogin.svg";

const FormUser = () => {
  return (
    <BasicContainer>
      <Form>
        <ContainerInputImg>
          <Img src={ImgenUser} alt="img" />
          <Round>
            <FontAwesomeIcon
              icon={faCamera}
              size="2x"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                color: "#fff",
              }}
            />
            <InputImg type="file" />
          </Round>
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
          <Input type="date" format="yyyy-MM-dd" />
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

export default FormUser;
