import { useEffect, useState } from "react";
import HeaderViews from "../components/HeaderViews";
import { showHEmployee } from "../services/hability-employee-services";
import { showReviews } from "../services/reviews-service";
import { showEmployee } from "../services/users-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BasicContainer, SubContainer } from "../styles/containers";
import Footer from "../components/Footer";
import {
  ContainerImg,
  ContainerInfo,
  Container,
  Img,
  UserName,
  Servicios,
} from "../styles/views/ProfileHeader";
import {
  Aptitudes,
  Info,
  DatosPersonales,
  Reseñas,
  Review,
} from "../styles/views/EmployeeProfile";
import icon from "../assets/config.svg";

export default function ProfileEmployee() {
  const [profile, setProfile] = useState(null);
  const [reviews, setRviews] = useState(null);
  const [hviews, setHviews] = useState(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    showEmployee(id).then(setProfile);
    showReviews(id).then(setRviews);
    showHEmployee(id).then(setHviews);
  }, []);

  const paintStar = (cantidad) => {
    let starts = [];
    for (let i = 0; i < cantidad; i++) {
      starts.push(<FontAwesomeIcon key={i} icon={faStar} color="#FFC107" />);
    }
    return starts;
  };

  return (
    <BasicContainer>
      <HeaderViews title="Perfil de empleado" />
      <SubContainer>
        {profile ? (
          <>
            <ContainerInfo id="EMPLEADO">
              <Container>
                <ContainerImg>
                  <Img src={profile?.image_url} alt={profile?.full_name} />
                </ContainerImg>
                <UserName>{profile?.full_name}</UserName>
              </Container>
              <Servicios>Exeriencia: 3 años</Servicios>
            </ContainerInfo>
            <Info>
              <Aptitudes>
                <h3>APTITUDES</h3>
                {hviews ? (
                  <ul>
                    {hviews.map((hview) => (
                      <li key={hview.id}>
                        <img src={icon} alt="icon" /> {hview.hability}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay ninguna aptitud por el momento</p>
                )}
              </Aptitudes>

              <DatosPersonales id="DATOS PERSONALES">
                <h3>DATOS PERSONALES Y CONTACTO</h3>
                <p>MINIBIOGRAFIA: </p>
                <p>EDAD: </p>
                <p>
                  NACIONALIDAD: <span>{profile.country}</span>
                </p>
                <p>
                  Telefono:
                  <a href={"http://wa.me/" + profile.phone}>
                    <span> Contactar</span>
                  </a>
                </p>

                <p>
                  Email: <span>{profile.email}</span>
                </p>
              </DatosPersonales>

              <DatosPersonales id="UBICACIÓN E INSIGNIAS">
                <h3>UBICACIÓN E INSIGNIAS</h3>
                <p>
                  UBICACIÓN: <span>{profile.region}</span>{" "}
                </p>
                <p>INSIGNIAS: </p>
              </DatosPersonales>
              <DatosPersonales id="SERVICIOS">
                <h3>SERVICIOS</h3>
                <p>SERVICIOS: </p>
              </DatosPersonales>
              <Reseñas id="RESEÑAS">
                <h3>RESEÑAS</h3>
                {reviews ? (
                  reviews.map((review) => (
                    <Review key={review.id}>
                      <div>
                        <h4>{review.full_name}</h4>
                        <p>{review.body}</p>
                      </div>
                      {paintStar(review.score)}
                    </Review>
                  ))
                ) : (
                  <p>No hay ninguna reseña en este momento.</p>
                )}
              </Reseñas>
            </Info>
          </>
        ) : (
          <div>no hay datos aún</div>
        )}
      </SubContainer>
      <Footer />
    </BasicContainer>
  );
}
