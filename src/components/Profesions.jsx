// import { useEffect } from "react";
// import { useAuth } from "../context/auth-context";
import { Oficios } from "../constantes/oficios";
import { ButtonStandard } from "../styles/buttons";
import {
  Container,
  NewLink,
  Title,
  ContainerImg,
} from "../styles/views/Profesions";

const Profesions = () => {
  // const { categories, getCategories } = useAuth();
  // useEffect(() => {
  //   getCategories();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Container>
        {Oficios.map((oficio) => (
          <ContainerImg key={oficio.id}>
            <NewLink to={`/select_service/?id=${oficio.id}`}>
              <img src={oficio.img} alt={oficio.nombre} />
              <Title>{oficio.nombre}</Title>
            </NewLink>
          </ContainerImg>
        ))}
        {/* Codigo de iteracion */}
        {/* {categories ? (
        <>
          {categories.map((category) => (
            <p key={category.id}>{category.category_name} </p>
          ))}
        </>
      ) : (
        <div>
          <h2>Categories not found</h2>
        </div>
      )} */}
      </Container>
      <ButtonStandard color="azul" marginB="7">
        Conoce al Equipo
      </ButtonStandard>
    </>
  );
};

export default Profesions;
