import { useEffect, useState } from "react";
import { cart } from "../pages/ServiceStep1";
import { showService } from "../services/services-services";

function Labores() {
  const [services, setServices] = useState(null);
  const id = cart[0];
  console.log(id)
  useEffect(() => {
    showService(id).then(setServices);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  console.log(services)
  return(    
    <>
        {services ? (
          <div>
            {services.map((service) => {
              return (
                <div>
                  <input type="checkbox" id={service.id}/>
                  <label for={service.id}>{service.service_name}</label>
                </div>
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
      

export default Labores;
