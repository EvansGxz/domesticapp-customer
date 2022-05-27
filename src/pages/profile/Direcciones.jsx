import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { showAddress } from "../../services/address-services";
import { Input } from "../../styles/views/Login";


function Direcciones(){
  const [addressDetail, setAddressDetail] = useState(null);
  const {user} = useAuth();
  useEffect(() => {
    showAddress(user.id).then(setAddressDetail);
  }, [user.id]); //works?

  return(
    <>
  
      <div>
        <Input placeholder={"Ingresa direccion a laborar"} />
        <button>Agregar</button>
      </div>
      {addressDetail ? (
        <>
          {addressDetail.map((address) => (
            <p key={address.id}>{address.address} </p>
          ))}
        </>
      ) : (
        <div>
          <h2>Address not found</h2>
        </div>
      )}
    </>
    )
  }
  
  export default Direcciones;