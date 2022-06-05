import { useEffect, useState } from "react";
import HeaderViews from "../components/HeaderViews";
import { showHEmployee } from "../services/hability-employee-services";
import { showReviews } from "../services/reviews-service";
import { showEmployee } from "../services/users-service";

export default function ProfileEmployee(){
  
  const [profile, setProfile] = useState(null);
  const [reviews, setRviews] = useState(null);
  const [hviews, setHviews] = useState(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    showEmployee(id).then(setProfile);
    showReviews(id).then(setRviews);
    showHEmployee(id).then(setHviews);
  }, []);

  console.log(profile)
  return profile ? (
        <>
        <HeaderViews title="Perfil de empleado" />
          <div id="EMPLEADA">
            <img alt="employee" src={profile.image_url}/>
            <p>NOMBRE: {profile.full_name}</p>
            <p>Exeriencia: 3 años</p>
            <h3>APTITUDES</h3>
            {hviews ? (
                hviews.map((hview) =>{
                  return (
                  
                  <ul>
                    <li>
                      {hview.hability}
                    </li>
                  </ul>)
                  
                })
              ) : (<p>No hay reseñas</p>)}
          </div>
              <br/>
            <div id="DATOS PERSONALES">
              <p>MINIBIOGRAFIA: </p>
              <p>EDAD: </p>
              <p>NACIONALIDAD: {profile.country}</p>
              <a href={"http://wa.me/"+profile.phone}><p>Contactar</p></a>
              
            </div>
            <div id="UBICACIÓN E INSIGNIAS">
              <p>UBICACIÓN: </p>
              <p>INSIGNIAS: </p>
            </div>
            <div id="SERVICIOS">
              <p>SERVICIOS: </p>
            </div>
            <div id="RESEÑAS">
            <h3>RESEÑAS</h3>
              {reviews ? (
                reviews.map((review) =>{
                  return (
                  
                  <ul>
                    <li>
                      {review.full_name}
                    </li>
                    <li>
                      {review.body}
                    </li>
                    <li>
                      {review.score}
                    </li>
                  </ul>)
                  
                })
              ) : (<p>No hay reseñas</p>)}
            </div>
        </>
    ) : (<div>no hay datos aún</div>);

};
