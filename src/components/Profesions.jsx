// import { useEffect } from "react";
// import { useAuth } from "../context/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { ButtonStandard } from "../styles/buttons";
import {
  Container,
  NewLink,
  Title,
  ContainerImg,
} from "../styles/views/Profesions";

const Profesions = () => {
  const navigate = useNavigate();
   const { categories, getCategories } = useAuth();
   useEffect(() => {
     getCategories();
   }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Container>
        {/*Oficios.map((oficio) => (
          <ContainerImg key={oficio.id}>
            <NewLink to={`/select_service/?id=${oficio.id}`}>
              <img src={oficio.img} alt={oficio.nombre} />
              <Title>{oficio.nombre}</Title>
            </NewLink>
          </ContainerImg>
        ))*/}
        {/* Codigo de iteracion */}
        {categories ? (
          <>
          {categories.map((category) => (
             <ContainerImg key={category.id}>
            <NewLink to={`/select_service/?id=${category.id}`}>
              <img src={category.image_url} alt={category.category_name} />
              <Title>{category.category_name}</Title>
            </NewLink>
          </ContainerImg>
          ))}
          </>     
      ) : (
        <div>
          <h2>Categories not found</h2>
        </div>
      )}
      </Container>
      <ButtonStandard color="azul" marginB="7" onClick={() => navigate("/equipo")}>
        Conoce al Equipo
      </ButtonStandard>
    </>
  );
};

export default Profesions;
