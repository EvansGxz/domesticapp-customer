export let a;
export default async function CalculateRoute(origen, employees) {

  let x = []
  // eslint-disable-next-line no-undef
  const directionsService = new google.maps.DirectionsService()
  for (const employee of employees) {
    const results = await directionsService.route({
      origin: origen,
      destination: employee.employee.region,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    
    x.push({Address: employee.employee.region, End_address: results.routes[0].legs[0].end_address, Distance: results.routes[0].legs[0].distance.value})
    
  }
  x.sort((a, b) => {
    return a.Distance - b.Distance;
  });

  
  employees.forEach((m) => {
    if (m.employee.region === x[0].Address){
      a = m
    }
  })
  return a.employee;
}
