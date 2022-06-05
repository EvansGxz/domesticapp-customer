import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Input
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';
import { showEmploye } from '../services/users-service';
import { ButtonStandard } from '../styles/buttons';
import CalculateRoute from './Googe-routes';
const REACT_APP_GOOGLE_MAPS_API_KEY= "AIzaSyBiDrPVhypnkVtJSNrevfqlwaFJjgWE_bA"
const center = { lat: 48.8584, lng: 2.2945 }

function GoogleMapp() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  const [employee, setEmployee] = useState(null)
  useEffect(() => {
    showEmploye().then(setEmployee);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [directionsResponse, setDirectionsResponse] = useState(null)
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()

  if (!isLoaded) {
    return <div />
  }

  async function clearRoute() {
    if (originRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: originRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    localStorage.setItem("Address", originRef.current.value)
    CalculateRoute(originRef.current.value, employee)
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='340px'
    >
      <Box position='relative' left={0} top={0} h='100%' w='85%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          
        >
        <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='20px'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Calle, Distrito, Region, Estado, Pais' ref={originRef}/>
            </Autocomplete>
          </Box>
          <ButtonGroup>
            <ButtonStandard colorScheme='pink' type='submit' onClick={clearRoute}>
              Agregar
            </ButtonStandard>
          </ButtonGroup>
        </HStack>
      </Box>
    </Flex>
  )
}

export default GoogleMapp
