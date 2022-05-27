import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { createAddress, showAddress } from "../../services/address-services";
import { Input } from "../../styles/views/Login";
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'


function Direcciones(){
  const REACT_APP_GOOGLE_MAPS_API_KEY = "AIzaSyBiDrPVhypnkVtJSNrevfqlwaFJjgWE_bA"
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  const originRef = useRef()
  const {user} = useAuth();
  useEffect(() => {
    showAddress(user.id).then(setAddressDetail);
  }, [user.id]);

  const [addressDetail, setAddressDetail] = useState(null);
  
  if (!isLoaded) {
    return <h2>Loading...</h2>
  }
 

  function newAddress(){
    const getAddress = { customer_id: user.id, address: originRef.current.value };
    createAddress(getAddress).then(() => {window.location.reload()});
  }
  return(
    <>
  
      <div>
        <Autocomplete>
          <Input type='text' innerRef={originRef} placeholder="Ingresa direccion a laborar" />
        </Autocomplete>
        <button onClick={()=>newAddress()}>Agregar</button>
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