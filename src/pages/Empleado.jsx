import { useEffect, useState } from "react";
import { showEmployee } from "../services/users-service";

export default function ProfileEmployee(){
  
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    showEmployee(id).then(setProfile);
  }, []);

  return profile ? (
        <>
          <div id="EMPLEADA">
            <img alt="employee" src={profile.image_url}/>
            <p>NOMBRE: {profile.full_name}</p>
          </div>

            <div id="DATOS PERSONALES">
              <p>MINIBIOGRAFIA: </p>
              <p>EDAD: </p>
              <p>NACIONALIDAD: </p>
              <p>TELEFONO: </p>
            </div>
            <div id="UBICACIÓN E INSIGNIAS">
              <p>UBICACIÓN: </p>
              <p>INSIGNIAS: </p>
            </div>
            <div id="SERVICIOS">
              <p>SERVICIOS: </p>
            </div>
            <div id="RESEÑAS">
              <p>RESEÑAS: </p>
            </div>
        </>
    ) : (<div>no hay datos aún</div>);

};
