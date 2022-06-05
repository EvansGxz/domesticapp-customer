import { useEffect, useState } from "react";
import styled from "styled-components";
import { showOrderDetail } from "../services/order-details-services";
import { useAuth } from "../context/auth-context";
import { NewLink } from "../styles/views/Profesions";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";

function Equipo() {
  const [serviceDetail, setServiceDetail] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    showOrderDetail(user.id).then(setServiceDetail);
  }, [user.id]);

  const Photo = styled.img`
    width: 15.065rem;
    height: 15.065rem;
    border-radius: 50%;
    margin-bottom: 1.25rem;
    box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
  `;
  let x
  if(serviceDetail){
    
    x = serviceDetail.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.employee.full_name === value.employee.full_name
  ))
)
  }
  
  return (
    <div >
    <HeaderViews title="Mi Equipo" />
      <div>
      {x ? (
        x.map((service) => {

          return (
            <>
              {service.active ? (
                <>
                  <div>
                  <ul>
                    <li>
                      <NewLink to={`/employee_profile/?id=${service.employee.user_id}`}>
                        <Photo alt="employee" src={service.employee.image_url} />
                        <p>{service.employee.full_name}</p>
                      </NewLink>
                    </li>
                  </ul>
                    
                  </div>
                </>
               
              ) : ""}
              
            </>
          );
        })
        
      ) : (
        <div>no hay datos aún</div>
      )}
      
      </div>
      <Footer />
    </div>
  )
}

export default Equipo;
