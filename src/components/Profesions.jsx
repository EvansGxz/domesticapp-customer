// import { useEffect } from "react";
// import { useAuth } from "../context/auth-context";
import { Oficios } from "../constantes/oficios";
import { ButtonStandard } from "../styles/buttons";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 1.5rem;
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

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
            <img src={oficio.img} alt={oficio.nombre} />
            <p>{oficio.nombre}</p>
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
      <ButtonStandard color="azul">Conoce al Equipo</ButtonStandard>
    </>
  );
};

export default Profesions;
