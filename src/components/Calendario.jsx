import React, { useEffect, useState } from "react";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styled from "styled-components";
import { useAuth } from "../context/auth-context";
import { showOrderDetail } from "../services/order-details-services";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
`;
const Title = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const MiCalendar = () => {
  const { user }= useAuth();
  const [value, setValue] = useState()
  useEffect(() => {
    showOrderDetail(user.id).then(setValue)
  }, [user.id])

  //const date = [new Date(2022, 6, 1), new Date(2022, 6, 5), new Date(2022, 6, 3)]
  let date=[]
  if(value){
    value.forEach((m) => {
      if (m.start_date){
        
        const [year, month, day] = m.start_date.split('-')
        const result = [month, day, year].join('/');
        date.push(new Date(result))
      }
    })
  }
  return (
    <>
     
      <Container>
      <p>Recuerda que los reportes deben de realizarse dentro de las primeras 48hrs.</p>
      <Title>Seleccionar fecha en el calendario:</Title>
      <Calendar
        value={date}
        readOnly
        plugins={[
          <DatePanel
            removeButton={false}
          />
        ]}
      />
      </Container>
    </>
  );
};

export default MiCalendar;

