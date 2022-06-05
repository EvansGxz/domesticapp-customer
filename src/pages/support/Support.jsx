import { supportText } from "../../constantes/paragraph";
import { IconsAyuda } from "../../constantes/centroAyuda";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";
import {
  SupportContainer,
  Title,
  NewLink,
  Info,
  ContainerIcon,
} from "../../styles/views/Support";

const Support = () => {
  return (
    <BasicContainer>
      <HeaderViews title="Centro de Ayuda" />
      <SupportContainer>
        <p>{supportText}</p>
        <Title>Temas de Ayuda</Title>
        <div>
          {IconsAyuda.map((iconAyuda) => (
            <NewLink key={iconAyuda.id} to={iconAyuda.ruta}>
              <ContainerIcon>
              <a href={iconAyuda.link} >
                <img src={iconAyuda.img} alt={iconAyuda.nombre} />
                <Info>{iconAyuda.nombre}</Info></a>
              </ContainerIcon>
            </NewLink>
          ))}
        </div>
      </SupportContainer>
      <Footer />
    </BasicContainer>
  );
};

export default Support;
