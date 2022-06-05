import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { showFavoritos } from "../services/favorites-services";
import { NewLink } from "../styles/views/Profesions";
import styled from "styled-components";

const Photo = styled.img`
width: 15.065rem;
height: 15.065rem;
border-radius: 50%;
margin-bottom: 1.25rem;
box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
`;

function Favoritos() {
  const [services, setServices] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    showFavoritos(user.id).then(setServices);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const id = new URLSearchParams(window.location.search).get("id");

  return(    
    <>
        {services ? (
          <div>
            {services.map((service) => {
              console.log(service)
              console.log(service.category_id)
              return (
                <>
                {id === service.category_id.toString() ? (  
                  <div>
                    <ul>
                        <li>
                          <NewLink to={`/employee_profile/?id=${service.employee_id}`}>
                            <Photo alt="employee" src={service.image_url} />
                            <p>{service.full_name}</p>
                          </NewLink>
                        </li>
                      </ul>
                </div>
                ) : <p>nada</p>}
                </>
              );
            })}
          </div>
        ) : ( 
          <div>
            <h2>Services not found</h2>
          </div> )}
    </>
  );
}
      

export default Favoritos;
