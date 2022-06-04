import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styled from "styled-components";

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
export let fecha;
const CalendarPicker = () => {
  const [value, setValue] = useState()
  //const date = [new Date(2022, 6, 1), new Date(2022, 6, 5), new Date(2022, 6, 3)]
  const favorito = "";
  fecha = value
  return (
    <>
      {favorito ? (
        
      <Container>
      <Title>Seleccionar fecha en el calendario:</Title>
      <DatePicker
        value={value}
        onChange={(e) => {console.log(e.target.value)}}
        format="MM/DD/YYYY HH:mm:ss"
        minDate={new Date()}
        multiple
        plugins={[
        <TimePicker position="bottom" />,
        <DatePanel markFocused
          removeButton={false} 
          header="Ocupadas"  
          focusedClassName="bg-red"
          />
        ]}
      />
      </Container>

    ):(
      <Container>
      <Title>Seleccionar fecha en el calendario:</Title>
      <DatePicker
        value={value}
        format="MM/DD/YYYY HH:mm:ss"
        onChange={setValue}
        plugins={[
        <TimePicker position="left" />
        ]}
      />
      </Container>
    )

    }
    </>
  );
};

export default CalendarPicker;

