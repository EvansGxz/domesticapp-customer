import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { createAddress, showAddress } from "../../services/address-services";
import { Input } from "../../styles/views/Login";
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { ContainerIcon } from "../../styles/views/Support";
import gps from "../../assets/gps.svg";
import styled from "styled-components";
import { ButtonStandard } from "../../styles/buttons";

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
  const addressRef = useRef()

  const [addressDetail, setAddressDetail] = useState(null);
  const Photo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 2rem;
`;
 const Info = styled.span`
  display: inline;
`;
  const Container = styled.div`
    width:80%;
    margin: 0 auto;
  `;
  if (!isLoaded) {
    return <h2>Loading...</h2>
  }
 

  function newAddress(){
    if (originRef.current.value === '') {
      return
    }
    const getAddress = { customer_id: user.id, address: originRef.current.value };
    createAddress(getAddress).then(() => {window.location.reload()});
  }
  return(
    <>
    <HeaderViews title="MIS DIRECCIONES" />
      <Container>
        <Autocomplete>
          <Input type='text' innerRef={originRef} placeholder="Ingresa direccion a laborar" />
        </Autocomplete>
        <ButtonStandard onClick={()=>newAddress()}>Agregar</ButtonStandard>
      </Container>
      {addressDetail ? (
        <>
          {addressDetail.map((address) => (
            <>
            <ContainerIcon >
                <Photo src={gps} alt="gps"  />
                <Info key={address.id} onClick={(()=>console.log(addressRef.current.value))} ref={addressRef}>{address.address}</Info>
              </ContainerIcon>
            </>
          ))}
        </>
      ) : (
        <div>
          <h2>Address not found</h2>
        </div>
      )}
      <Footer />
    </>
    )
  }
  
  export default Direcciones;