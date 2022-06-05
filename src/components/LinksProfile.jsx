import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryLinks } from "../constantes/linksPerfil";
import { azul } from "../styles/colors";
import {
  Container,
  ContainerCategoria,
  ContainerLink,
  ContainerLinks,
  Info,
  Span,
  Title,
} from "../styles/views/ProfileRoutes";

const LinksProfile = () => {
  return (
    <Container>
      {CategoryLinks.map((categoria) => (
        <ContainerCategoria key={categoria.id}>
          <Title>{categoria.title}</Title>
          <ContainerLinks>
            {categoria.links.map((linkC) => (
              <ContainerLink key={linkC.id}>
                <Info>
                  <img src={linkC.icon} alt={linkC.nombre} />
                  <Span>{linkC.nombre}</Span>
                </Info>
                <Link to={linkC.ruta}>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{ color: azul }}
                    size="2x"
                  />
                </Link>
              </ContainerLink>
            ))}
          </ContainerLinks>
        </ContainerCategoria>
      ))}
    </Container>
  );
};

export default LinksProfile;
